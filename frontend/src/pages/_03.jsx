import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import useWallet from '../hooks/useWallet';
import TokenABI from '../abi/_03/SimpleToken.json';
import Loading from '../components/Loading';
import { showToastPromise } from '../utils/toastUtils';
import ConnectWallet from '../components/ConnectWallet';
import toast from 'react-hot-toast';

const _03 = () => {
  const { wallet } = useWallet();
  const [totalSupply, setTotalSupply] = useState(null);
  const [decimals, setDecimals] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const contractInstance = new web3Instance.eth.Contract(
          TokenABI.abi,
          '0x6270B5432d3d4538966Fd4067322dB2dd17903cd' // (change to your own contract address)
        );
        setContract(contractInstance);
      } else {
        alert('Please install MetaMask!');
      }
    };
    initWeb3();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchSupply = async () => {
      if (contract) {
        const decimals = await contract.methods.decimals().call();
        setDecimals(decimals.toString());
        const supply = await contract.methods.totalSupply().call();
        setTotalSupply(decimalConversion(supply, decimals).toString());
      }
    };
    fetchSupply();
    setLoading(false);
  }, [contract]);

  const decimalConversion = (value, decimal) => {
    return (Number(value) / 10 ** Number(decimal));
  }

  return (
    <div className='grid grid-cols-2 pt-24 gap-8'>
      <div className="col-span-2 lg:col-span-1">
        Yes
      </div>
      <div className='col-span-2 lg:col-span-1'>
        <div className="stats stats-vertical shadow flex flex-col">
          <div className="stat">
            <div className="stat-title">Total Supply</div>
            <div className="stat-value">{totalSupply || <Loading/>}</div>
            <div className="stat-desc">$MyToken</div>
          </div>
          <div className="stat">
            <div className="stat-title">Decimals</div>
            <div className="stat-value">{decimals || <Loading/>}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default _03