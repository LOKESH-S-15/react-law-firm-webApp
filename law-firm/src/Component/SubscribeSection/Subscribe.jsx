import React from 'react'
import styles from "./Subscribe.module.css"

const Subscribe = () => {
  return (
    <div className={styles.subscribeCon}>
      <h1>Subscribe Our Newsletter</h1>
      <div className={styles.subscribeBodyCon}>
      <div className={styles.subscribeBodyNameCon}>
      <input placeholder='Name' className={styles.subscribeBodyname}></input></div>
      <div className={styles.subscribeBodyEmailCon}> 
      <input className={styles.subscribeBodyEmail} placeholder='Enter Your Email'></input></div>
      <button className={styles.subscribeBodyBtn}>Send</button>
      </div>
      
    </div>
  )
}

export default Subscribe
