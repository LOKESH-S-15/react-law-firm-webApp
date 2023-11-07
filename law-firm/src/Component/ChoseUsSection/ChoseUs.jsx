import React from "react";
import styles from "./ChoseUs.module.css";
import ChoseUsCard from "./ChoseUsCard";

const ChoseUs = () => {
  return (
    <div className={styles.choseUsCon}>
      <div className={styles.introCon}>
        <h1>Let's Introduce Ourself</h1>
        <div className={styles.lineBreak}></div>
        <div className={styles.ChoseUsCriminalSec}>
          <h2>Criminal Lawyer</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <div className={styles.choseUsSecCon}>
      <h1>Why Choose us?</h1>
        <div className={styles.ChoseUsCardSec}>
          <ChoseUsCard />
          <ChoseUsCard />
          <ChoseUsCard />

        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
