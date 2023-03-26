import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LocalGanahce = {
    chainId: 1337,
    rpc:"http://127.0.0.1:7545",
    nativeCurrency: {
      decimals: 18,
      name: "Consensys ETH",
      symbol: "ETH",
    },
    shortName: "czkevm", // Display value shown in the wallet UI
    slug: "consensys", // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "ConsenSys", // Name of the network
    name: "localganache",
};

root.render(
    <ThirdwebProvider activeChain={LocalGanahce}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)