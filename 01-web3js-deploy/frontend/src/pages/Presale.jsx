import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import ConnectButton from '../components/ConnectButton';
import { useWallet } from '../contexts/WalletContext.jsx';
import presaleAbi from '../abi/Presale.json';

const Presale = () => {
  const { account } = useWallet();
  const [quantity, setQuantity] = useState('');
  const rate = 100; // Rate is fixed at 100
  const [tokensToReceive, setTokensToReceive] = useState(0);

  useEffect(() => {
    if (quantity) {
      const web3 = new Web3();
      const weiAmount = web3.utils.toWei(quantity, 'ether');
      const tokens = weiAmount * rate;
      setTokensToReceive(tokens);
    } else {
      setTokensToReceive(0);
    }
  }, [quantity, rate]);

  const handleBuyTokens = async () => {
    if (!account) {
      alert('Please connect your wallet first.');
      return;
    }

    const web3 = new Web3(window.ethereum);
    const contractAddress = '0x9f9D7Ab092a967784E6c80516dCaC8c69728f35d';
    const presaleContract = new web3.eth.Contract(presaleAbi.abi, contractAddress);

    try {
      await presaleContract.methods.buyTokens(account).send({
        from: account,
        value: web3.utils.toWei(quantity, 'ether'),
      });
      alert('Tokens purchased successfully!');
    } catch (error) {
      console.error('Error purchasing tokens:', error);
      alert('Error purchasing tokens. Please try again.');
    }
  };

  return (
    <div>
      <ConnectButton />
      <input
        type="text"
        placeholder="$ETH Quantity"
        className="input input-bordered w-full max-w-xs"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <p>You will receive {tokensToReceive} $BIT</p>
      <button className="btn btn-primary" onClick={handleBuyTokens}>
        Buy $BIT
      </button>
    </div>
  );
};

export default Presale;