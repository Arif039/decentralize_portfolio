import { useState } from 'react';
import { ethers } from 'ethers';


function Support({ currentAccount, contract }) {
  const [amount, setAmount] = useState(0.01);

  // supportOwner function: uses the provided contract instance to send ETH
  const supportOwner = async (amount) => {
    try {
      if (!contract) {
        alert("Smart contract is not initialized");
        return;
      }
      const amountWei = ethers.parseEther(amount.toString());
      console.log(`Sending ${amount} ETH to contract owner...`);
      
      const tx = await contract.supportMe({ value: amountWei });
      console.log("Transaction Hash:", tx.hash);
      
      await tx.wait();
      console.log("Transaction is confirmed");
      alert("Thank you for your support");
    } catch (error) {
      console.error("Failed supporting owner", error);
      alert("Failed to send support: " + error.message);
    }
  };

  // Form submission handler
  const handleSupport = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log("Current Account:", currentAccount);
    console.log("Contract:", contract);
    console.log("Amount to support:", amount);

    if (!currentAccount) {
      alert("Please connect your wallet first");
      return;
    }
    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    
    try {
      await supportOwner(amount);
    } catch (error) {
      console.error("Support Error", error);
    }
  };

  return (
    <section className='support text-white mt-10' id='support'>
      <h2 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Support My Work</h2>
      <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>If you appreciate my work, 
          <br />please consider supporting me
      </p>

      <form onSubmit={handleSupport}>
        <div className='flex flex-col'>
          <label htmlFor="amount" className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 mt-2'>Amount (ETH): </label>
          <input
            type="number"
            id="amount"
            step="0.01"
            min="0.1"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className='border-1 border-white-500/100 ... invalid:border-pink-500 invalid:text-pink-600 focus:border-green-700 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ... w-xs md:w-sm p-2 rounded-sm'
          />
        </div>

        <button type='submit' disabled = {!currentAccount} className='text-base font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-2 text-white  cursor-pointer rounded-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 mt-4'>
          Send Support
        </button>

        {!currentAccount && (<p>Please connect your wallet</p>)}
      </form>
    </section>
  );
}

export default Support;
