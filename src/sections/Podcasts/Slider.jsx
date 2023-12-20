import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import prevArrow from "../../../public/assets/icons/navigate_left.svg";
import nextArrow from "../../../public/assets/icons/navigate_right.svg";
import { getPodcasts } from "../../utils/getPodcasts";

const Slider = ({
  slidesPerView,
  spaceBetween,
  centeredSlides,
  initialSlide,
  breakpoints,
}) => {
  const [pods, setPods] = useState([]);

  const handlePods = async () => {
    try {
      const podcasts = await getPodcasts();
      setPods(podcasts);
    } catch (error) {
      console.error("Error in fetchDataFromSheet:", error);
    }
  };

  useEffect(() => {
    handlePods();
  }, []);

  let navigationBtns = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };

  const handlePodcastClick = () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loading");
  };

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={slidesPerView}
      loop
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      initialSlide={initialSlide}
      navigation={navigationBtns}
      breakpoints={breakpoints}
    >
      {pods?.map((podcast, i) => (
        <SwiperSlide key={i}>
          <Link
            href={{
              pathname: `/[slug]`,
              query: { ...podcast },
            }}
            as={`/${podcast.slug}`}
            onClick={handlePodcastClick}
          >
            <Image
              src={podcast.img}
              alt={podcast.title}
              width={300}
              height={300}
            />
          </Link>
        </SwiperSlide>
      ))}
      <div className='swiper-button-next arrow'>
        <Image src={nextArrow} alt='' />
      </div>
      <div className='swiper-button-prev arrow'>
        <Image src={prevArrow} alt='' />
      </div>
    </Swiper>
  );
};

export default Slider;
