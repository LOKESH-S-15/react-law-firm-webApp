import React from 'react'
import styles from "./Client.module.css"

const ClientCard = ({item}) => {
  
  return (
    
    <div className={styles.ClientCardCon}>
      <img src={item.src} alt ={item.name}/>
      <div className={styles.ClientCardNameCon}>
      <h2>{item.name}</h2>
      <h4>Ceo of Hunt</h4>
      </div>
      <p>Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint. Velit officia
      consequatduis enim velit mollit Exer. sit
      aliqua dolor do amet sint. Velit officia</p>
      

      
    
      
    </div>
  )
}

export default ClientCard
