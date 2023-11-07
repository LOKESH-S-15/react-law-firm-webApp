import React from 'react'
import styles from "./Team.module.css"

const TeamCard = ({data}) => {
  return (
    <div className={styles.teamCardCon}>
      <img src={data.src} alt={"img"}/>
      <div className={styles.teamCardNameCon}>
      <h1 >{data.name}</h1>
      <p>{data.case} cases</p>
      </div>
    </div>
  )
}

export default TeamCard
