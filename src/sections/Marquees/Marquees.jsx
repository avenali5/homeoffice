import React, { useEffect } from "react";
import { Spotify } from "react-spotify-embed";
import { MarqueesStyle } from "./style";
import Image from "next/image";
import marqueePurple from "../../../public/assets/images/purple_marquee.svg";
import marqueeYellow from "../../../public/assets/images/yellow_marquee.svg";

const Marquees = () => {
  const handleScroll = () => {
    let image1 = document.querySelector(".marquee-purple");
    let image2 = document.querySelector(".marquee-yellow");
    let value = window.scrollY;
    if (image1) {
      image1.style.marginLeft = value / -70 + "rem";
    }
    if (image2) {
      image2.style.marginLeft = value / 70 + "rem";
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      handleScroll();
    };
  }, []);
  return (
    <MarqueesStyle>
      <Image src={marqueePurple} className='marquee-purple' />
      <Image src={marqueeYellow} className='marquee-yellow' />
    </MarqueesStyle>
  );
};

export default Marquees;
