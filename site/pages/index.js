import styles from "../styles/Home.module.css"
import Navbar from "../components/navbar"j
import InfoBubble from "../components/infobubble"
import { useState, useEffect, userRef } from "react";
import Web3Modal from "web3modal";
import { Contract, providers } from "ethers";
import { GIVER_CONTRACT_ADDR, GIVER_CONTRACT_ABI } from "../constants"

export default function Home() {
  const { walletConnected, setWalletConnected } = useState(false);
  const web3ModalRef = useRef();

  // Prompt for the wallet to be connected if it is not connected.
  const connectWallet = () => {
    if(!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        disableInjectedProvider: false,
        providerOptions: {}
      });

      const instance = await web3ModalRef.current.connect();
      const provider = new providers.Web3Provider(instance);

      const { chainId } = await web3Provider.getNetwork();
      if (chainId !== 80001) {
        window.alert("Please switch to the Mumbai test network!");
        throw new Error("Please switch to the Mumbai test network");
      }

      const signer = provider.getSigner();
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h2 className={styles.mainDescr}>
        Offer a stranger a helping hand.<br/>
        Pay it forward.
      </h2>
      <div className={styles.mainBubbles}>
        <InfoBubble title="give">
          Browse through all proposals to find one that
          resonates with you.
          <br/><br/>
          Anonymously support the proposal with as
          much or as little as you’d like - all giving helps.
          <br/><br/>
          Revel in your generous act of
          micro-philanthropy.
        </InfoBubble>
        <InfoBubble title="receive">
          Find yourself in need? Create a proposal to
          explain your situation and the amount you’re
          requesting.
          <br/><br/>
          Explain how the money will help you out.
          <br/><br/>
          Post your proposal, and receive help from
          strangers.
        </InfoBubble>
      </div>
    </div>
  )
}
