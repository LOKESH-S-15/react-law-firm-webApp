import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className={styles.navbarCon}>
      <Logo />
      <div className={styles.navbarCenterCon}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div className={styles.navbarContactCon}>
        <p>Contact Now</p>
      </div>
    </div>
  );
};

export default Navbar;
