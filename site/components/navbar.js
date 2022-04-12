import React from "react"
import styles from "../styles/Home.module.css"

export default function Navbar() {
  return (
    <section className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="giver.svg" className={styles.giverLogo} />
        <h1 className={styles.logoText}>giver</h1>
      </div>
        <p className={styles.navItem}>about</p>
        <p className={styles.navItem}>roadmap</p>
        <button className={styles.button}>Launch App</button>
    </section>
  )
}