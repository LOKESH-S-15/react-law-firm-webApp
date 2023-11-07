import React from "react";
import Logo from "../Navbar/Logo";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className={styles.footerCon}>
      <div className={styles.footerTopCon}>
        <Logo />
        <div className={styles.footerCenterCon}>
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <div className={styles.footerContactCon}>
          <InstagramIcon sx={{ height: 30, width: 30, color: "#FDD65B" }} />
          <FacebookIcon sx={{ height: 30, width: 30, color: "#FDD65B" }} />
          <TwitterIcon sx={{ height: 30, width: 30, color: "#FDD65B" }} />
          <PinterestIcon sx={{ height: 30, width: 30, color: "#FDD65B" }} />
        </div>
      </div>
      <div  className={styles.footerbottomCon}>
      <h1>© 2020 Acme. All right reserved.</h1>
      <h1>Privacy Policy</h1>
      <h1>Terms of Service</h1>
      </div>
    </div>
  );
};

export default Footer;
