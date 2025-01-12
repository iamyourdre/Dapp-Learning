import React from 'react';
import { useWallet } from '../contexts/WalletContext.jsx';

const ConnectButton = () => {
  const { account, connectWallet } = useWallet();

  return (
    <div>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button className="btn btn-primary" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectButton;