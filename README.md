<div align="center">
  <a href="https://particle.network/">
    <img src="https://i.imgur.com/xmdzXU4.png" />
  </a>
  <h3>
    Particle Auth Core Peaq Agung Demo
  </h3>
</div>

⚡️ Full-stack demo application showcasing the implementation of Particle Auth Core (Particle Network's flagship React-based Wallet-as-a-Service SDK) within applications built on Peaq Agung. Specifically, this demo facilitates social login, the assignment of a smart account, and the execution of 0.001 AGUNG burn, which is automatically gasless through the usage of Particle Network's Omnichain Paymaster.

🛠️ Try the demo: https://particle-peaq-demo.replit.app

Built using **Particle Auth Core**, **TypeScript**, **Particle AA SDK**

## 🔑 Particle Auth Core
Particle Auth Core, a component of Particle Network's Wallet-as-a-Service, enables seamless onboarding to an application-embedded MPC-TSS/AA wallet facilitated by social login, such as Google, GitHub, email, phone number, etc. - as an alternative to Particle Auth, the Auth Core SDK comes with more control over the modal itself, application-embedded popups rather than redirects, and so on.

![Demo screenshot](https://i.imgur.com/9n8owNr.png)

##

👉 Learn more about Particle Network: https://particle.network

## 🛠️ Quickstart

### Clone this repository
```
git clone https://github.com/TABASCOatw/particle-peaq-demo.git
```

### Install dependencies
```
yarn install
```
OR
```
npm install
```

### Set environment variables
This project requires a number of keys from Particle Network to be defined in `.env`. Create `.env` file from `.env.example` file. The following should be defined:
- `VITE_REACT_APP_APP_ID`, the ID of the corresponding application in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
- `VITE_REACT_APP_PROJECT_ID`, the ID of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `VITE_REACT_APP_CLIENT_KEY`, the client key of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).

### Start the project
```
npm run dev
```
OR
```
yarn dev
```