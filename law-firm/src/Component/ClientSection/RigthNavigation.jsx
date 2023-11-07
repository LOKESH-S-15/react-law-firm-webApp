import React from 'react'
import styles from "./Client.module.css";
import { Button } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
const RigthNavigation = () => {
    const swiper=useSwiper();

    
  return (
    
    <Button
        className={styles.clientHeadBtn}
        onClick={() => swiper.slideNext()}
      >
        <ArrowForwardIosRoundedIcon sx={{ color: "black" }} />
      </Button>
     
  )
}

export default RigthNavigation
