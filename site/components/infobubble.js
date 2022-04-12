import React from "react"
import styles from "../styles/Home.module.css"

export default function InfoBubble (props) {
  const title = props.title;
  const text = props.children;

  return (
    <div className={styles.infoBox}>
      <h3 className={styles.infoHeading}>{title}</h3>
      <p className={styles.infoText}>{text}</p>
    </div>
  )
}