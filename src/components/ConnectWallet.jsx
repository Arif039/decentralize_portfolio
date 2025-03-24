import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../constants';
import '../App.css';

function ConnectWallet({ currentAccount, setCurrentAccount, contract, setContract, isOwner, setIsOwner }) {


  
  // Function to connect wallet and initialize contract
  const walletConnect = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please install MetaMask");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected account:", accounts[0]);
      setCurrentAccount(accounts[0]);
      await initializeContract();
    } catch (error) {
      console.error("Error connecting wallet", error);
    }
  };

  // Initialize contract instance and check owner
  const initializeContract = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        // Use ethers.BrowserProvider for ethers v6; if using ethers v5, use ethers.providers.Web3Provider(ethereum)
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const portfolioContract = new ethers.Contract(contractAddress, contractABI, signer);
        console.log("Contract Instance:", portfolioContract);
        setContract(portfolioContract);

        // Check the owner of the contract (ensure your contract includes an owner() function)
        const owner = await portfolioContract.owner();
        console.log("Contract Owner:", owner);
        const signerAddress = await signer.getAddress();
        setIsOwner(owner.toLowerCase() === signerAddress.toLowerCase());
      }
    } catch (error) {
      console.error("Error while initializing contract", error);
    }
  };

  // Check wallet connection on component mount
  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log("Please install MetaMask");
          return;
        }
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
          await initializeContract();
        } else {
          console.log("No authorized account found");
        }
      } catch (error) {
        console.error("Error checking wallet connection", error);
      }
    };

    checkWalletConnection();

    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
          initializeContract();
        } else {
          setCurrentAccount("");
          setContract(null);
          setIsOwner(false);
        }
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      return () => window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    }
  }, [setCurrentAccount, setContract, setIsOwner]);

  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div>
      {!currentAccount ? (
        <button onClick={walletConnect} className='text-sm sm:p-1 md:text-base font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... md:p-2 text-white  cursor-pointer rounded-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Connect Wallet</button>
      ) : (
        <div>
          {isOwner && <span className="owner-badge text-white">Owner</span>}
          <span className="wallet-address text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-2">{shortenAddress(currentAccount)}</span>
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
