import React, { useState, useEffect } from 'react';
import { PeaqKrest } from '@particle-network/chains';
import { AAWrapProvider, SmartAccount } from '@particle-network/aa';
import { useEthereum, useConnect, useAuthCore } from '@particle-network/auth-core-modal';
import { ethers } from 'ethers';
import { notification } from 'antd';

import './App.css';
import { didPrecompiledContractAddress } from './contracts/did';

const App = () => {
  const { provider } = useEthereum();
  const { connect, disconnect } = useConnect();
  const { userInfo } = useAuthCore();

  const [balance, setBalance] = useState("...");

  const smartAccount = new SmartAccount(provider, {
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
    clientKey: import.meta.env.VITE_REACT_APP_CLIENT_KEY,
    appId: import.meta.env.VITE_REACT_APP_APP_ID,
    aaOptions: {
      accountContracts: {
        SIMPLE: [{ chainIds: [PeaqKrest.id], version: '1.0.0' }],
      }
    }
  });

  const customProvider = new ethers.providers.Web3Provider(new AAWrapProvider(smartAccount), "any");

  useEffect(() => {
    if (userInfo) {
      fetchBalance();
    }
  }, [userInfo]);

  const fetchBalance = async () => {
    const address = await smartAccount.getAddress();

    console.log("Smart Account Address: ", address);
    const balanceResponse = await customProvider.getBalance(address);
    setBalance(ethers.utils.formatEther(balanceResponse));
  };

  const handleLogin = async (socialType) => {
    if (!userInfo) {
      await connect({
        socialType,
        chain: PeaqKrest
      });
    }
  };



  const executeUserOp = async () => {


    const abiCoder = new ethers.utils.AbiCoder();

    const address = await smartAccount.getAddress();


    const addAttributeFunctionSignature = "addAttribute(address,bytes,bytes,uint32)";
    const createDidFunctionSelector = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(addAttributeFunctionSignature)).substring(0, 10);

    let now = new Date().getTime();

    const didAddress = address;
    const name = ethers.utils.hexlify(ethers.utils.toUtf8Bytes("didname" + now));
    const value = ethers.utils.hexlify(ethers.utils.toUtf8Bytes("didval"));
    const validityFor = 0;

    const params = abiCoder.encode(
      ["address", "bytes", "bytes", "uint32"],
      [didAddress, name, value, validityFor]
    );

    console.log("createDidFunctionSelector:: ", createDidFunctionSelector);
    console.log("didAddress:: ", didAddress);
    console.log("name:: ", name);
    console.log("value:: ", value);
    console.log("params:: ", params);

    let payload = params.replace("0x", createDidFunctionSelector);
    console.log("payload:: ", payload);


    const tx = {
      to: didPrecompiledContractAddress,
      data: payload
    };

    notification.info({
      message: "Submitting Transaction..."
    });

    const feeQuotes = await smartAccount.getFeeQuotes(tx);

    console.log("feeQuotes:: ", feeQuotes);

    const txResponse = await smartAccount.sendUserOperation({ userOp: feeQuotes.verifyingPaymasterGasless.userOp, userOpHash: feeQuotes.verifyingPaymasterGasless.userOpHash, });

    notification.success({
      message: "Transaction Successful",
      description: (
        <div>
          Transaction Hash: <a href={`https://krest.subscan.io/tx/${txResponse}`} target="_blank" rel="noopener noreferrer">{txResponse}</a>
        </div>
      )
    });
  };

  return (
    <div className="App">
      <div className="logo-section">
        <img src="https://i.imgur.com/EerK7MS.png" alt="Logo 1" className="logo logo-big" />
        <img src="https://i.imgur.com/rFGq3N0.png" alt="Logo 2" className="logo logo-small" />
      </div>
      {!userInfo ? (
        <div className="login-section">
          <button className="sign-button google-button" onClick={() => handleLogin('google')}>
            <img src="https://i.imgur.com/nIN9P4A.png" alt="Google" className="icon" />
            Sign in with Google
          </button>
          <button className="sign-button twitter-button" onClick={() => handleLogin('twitter')}>
            <img src="https://i.imgur.com/afIaQJC.png" alt="Twitter" className="icon" />
            Sign in with X
          </button>
          <button className="sign-button other-button" onClick={() => handleLogin('')}>
            <img src="https://i.imgur.com/VRftF1b.png" alt="Twitter" className="icon" />
          </button>
        </div>
      ) : (
        <div className="profile-card">
          <h2>{userInfo.name}</h2>
          <div className="balance-section">
            <small>{balance} KREST</small>
            <button className="sign-message-button" onClick={executeUserOp}>Execute Transaction</button>
            <button className="disconnect-button" onClick={() => disconnect()}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
