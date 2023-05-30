import Image from "next/image";
import React, { useEffect } from "react";
import { useSwiperSlide } from "swiper/react";

const Card = ({ info, setSlideActive, setBubbleColor, setFontColor }) => {
  const swiperSlide = useSwiperSlide();
  useEffect(() => {
    if (swiperSlide.isActive) {
      setSlideActive(info.index);
      setBubbleColor(info.backgroundColor);
      setFontColor(info.fontColor);
    }
  });

  return (
    <div className='info'>
      <h3>{info.name}</h3>
      <p>
        <a href=''>{info.ig}</a>
      </p>
      <Image src={info.img} alt={info.name} width={300} height={300} />
    </div>
  );
};

export default Card;
