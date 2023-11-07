import React from 'react'
import styles from "./ChoseUs.module.css"
import ChoseUsImg from './ChoseUsImg'

const ChoseUsCard = () => {
  return (
    <div className={styles.choseUsCardCon}>
      <ChoseUsImg/>
      <h3>100% Success Rate</h3>
      <p>Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint. Velit officia
      consequatduis enim velit mollit Exer.</p>
      <button>Read More</button>

      
    </div>
  )
}

export default ChoseUsCard
