import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Navbar from "../components/navbar"
import InfoBubble from "../components/infobubble"

export default function Home() {
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
