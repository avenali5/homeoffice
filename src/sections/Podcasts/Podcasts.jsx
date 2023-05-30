import React, { useEffect, useState } from "react";
import { PodcastsStyle } from "./style";
import Image from "next/image";
import gridIcon from "../../../public/assets/icons/grid.svg";
import Button from "../../components/Button/Button";
import Slider from "./Slider";
import Link from "next/link";

const Podcasts = () => {
  return (
    <PodcastsStyle>
      <div className='title'>
        <h2>NUESTROS PODCASTS</h2>
      </div>
      <Slider
        spaceBetween={50}
        initialSlide={0}
        centeredSlides
        breakpoints={{
          0: {
            slidesPerView: 1.4,
            centeredSlides: true,
          },
          620: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 2.8,
          },
          1100: {
            slidesPerView: 3.4,
            centeredSlides: false,
            // navigation: true,
          },
          1201: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
      />
      <div className='button-container'>
        <Link href='/podcasts'>
          <Button fullWidth>
            <Image src={gridIcon} alt='Ver todos' />
            Ver todos
          </Button>
        </Link>
      </div>
    </PodcastsStyle>
  );
};

export default Podcasts;
