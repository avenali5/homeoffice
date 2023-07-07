import React, { useEffect } from "react";
import { Spotify } from "react-spotify-embed";
import { MarqueesStyle } from "./style";
import Image from "next/image";
import marqueePurple from "../../../public/assets/images/purple_marquee.svg";
import marqueeYellow from "../../../public/assets/images/yellow_marquee.svg";

const Marquees = () => {
  return (
    <MarqueesStyle>
      <Image src={marqueePurple} className='marquee-purple' alt='' />
      <Image src={marqueeYellow} className='marquee-yellow' alt='' />
    </MarqueesStyle>
  );
};

export default Marquees;
