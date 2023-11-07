import React from "react";
import styles from "./AeraOfPractice.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Photo1 from "../../Assets/Rectangle 3652.png";
import Photo2 from "../../Assets/Rectangle 3651.png";
import Photo3 from "../../Assets/Rectangle 3653.png";
import Photo4 from "../../Assets/Rectangle 3654.png";
import Photo5 from "../../Assets/Rectangle 3656.png";
import Photo6 from "../../Assets/Rectangle 3655.png";

const AeraOfPractice = () => {
  return (
    <div className={styles.aeraOfPracticeCon}>
      <h1>Area of Practices</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <div className={styles.aeraOfPracticeCard}>
              <img src={Photo1} alt={"photo1"} />
              <p>BUSINESS LAW</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={styles.aeraOfPracticeCard}>
              <img src={Photo2} alt={"photo2"} />
              <p>BUSINESS LAW</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={styles.aeraOfPracticeCard}>
              <img src={Photo3} alt={"photo3"} />
              <p>BUSINESS LAW</p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={styles.aeraOfPracticeCard}>
              <img src={Photo4} alt={"photo4"} />
              <p>BUSINESS LAW</p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={styles.aeraOfPracticeCard}>
              <img src={Photo5} alt={"photo5"} />
              <p>BUSINESS LAW</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={styles.aeraOfPracticeCard}>
              <img src={Photo6} alt={"photo6"} />
              <p>BUSINESS LAW</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AeraOfPractice;
