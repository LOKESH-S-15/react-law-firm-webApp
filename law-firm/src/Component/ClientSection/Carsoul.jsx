import React from "react";

import { Navigation } from "swiper/modules";
import styles from "./Client.module.css";
import { Button } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import LeftNavigation from "./LeftNavigation";
import RigthNavigation from "./RigthNavigation";
const Carsoul = ({ clientData, renderComp }) => {
  const swiper = useSwiper();
  return (
    <Swiper
      style={{ padding: "10px 20px" }}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={3}
      initialSlide={0}
      navigation
      
    >
    <LeftNavigation/>
    <RigthNavigation/>
      
      
      {clientData.map((item) => {
        return <SwiperSlide key={item.name}>{renderComp(item)}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Carsoul;
