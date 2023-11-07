import React from 'react'
import styles from "./Team.module.css"
import { Grid,Box } from '@mui/material'
import TeamCard from './TeamCard'
import data from '../../ClientList/ClientList'

const Team = () => {
  let dataa=data.slice(3,10)
  
  return (
    <div className={styles.teamCon}> 
    <h1>Our Team</h1>
      <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {dataa.map((each)=>{
          return( <Grid item xs={4}>
            <TeamCard data={each}/>
            </Grid>)
        })}
       
        </Grid>
        </Box>
      </div>
    </div>
  )
}

export default Team
