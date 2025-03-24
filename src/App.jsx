import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';
import { contractAddress, contractABI, sampleData } from './constants';

// Importing components
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import ConnectWallet from './components/ConnectWallet';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Support from './components/Support';
import Contact from './components/Contact';


function App() {
  // State for wallet & contract
  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  // State for profile data
  const [profileData, setProfileData] = useState(sampleData);

  // Debugging: Log the current state whenever it updates
  useEffect(() => {
    console.log("App State - currentAccount:", currentAccount);
    console.log("App State - contract:", contract);
  }, [currentAccount, contract]);

  return (


    <div className="app">

      <div className=''>
      <div className='flex flex-row justify-between px-5 py-3 '>
            <Logo/>
            <Navbar/>
            <ConnectWallet
            currentAccount={currentAccount}
            setCurrentAccount={setCurrentAccount}
            contract={contract}
            setContract={setContract}
            isOwner={isOwner}
            setIsOwner={setIsOwner}
        />
        </div>
      </div>
      
        
      
      
      <header>
        <h1>Blockchain Portfolio App</h1>
        {/* Pass state setters so ConnectWallet can update parent's state */}
        
      </header>

      <main>
        <Profile profileImage={profileData.profileImage} bio={profileData.bio} />
        
        <Projects projects={profileData.projects} />
        <Education education={profileData.education} />
        <Experience experience={profileData.experience} />
        {/* Support receives the updated wallet and contract state */}
       <div>
        
       <div className='mt-30'>
          <h2 className='text-white text-center font-black mb-20'>CONTACT ME</h2>
          <div className='ml-10 md:m-auto flex flex-row place-content-center gap-20 flex-wrap'>
            <Contact/>
            <Support currentAccount={currentAccount} contract={contract} />
          </div>
        </div>
       </div>
        
        
        
      </main>

      <footer className='text-white text-center bg-gray-900 p-4 mt-30'>
        <p>Smart Contract: {contractAddress}</p>
        <p>Copyright by Arif</p>
      </footer>
    </div>
  );
}

export default App;
