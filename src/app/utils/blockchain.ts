import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum: any;
  }
}

export async function connectWallet() {
  if (!window.ethereum) {
    alert('MetaMask is required to use this app');
    return;
  }

  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
    throw error;
  }
}
