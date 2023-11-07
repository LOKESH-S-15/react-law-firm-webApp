import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "./HeroImg";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Hero = () => {
  return (
    <div className={styles.heroCon}>
      <div className={styles.heroDetailsCon}>
        <h1>You don't have to Fight them Alone.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.heroInputCon}>
          <EmailRoundedIcon sx={{height:22,width:22,color:"fff", opacity:0.2}}/>
          <input placeholder="Enter your eamil address"></input>
          <button>Let's Talk</button>
        </div>
      </div>
      <HeroImg/>
    </div>
  );
};

export default Hero;
