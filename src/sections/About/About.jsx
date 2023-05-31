import React, { useEffect, useState } from "react";
import { AboutStyle } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import greyWave from "../../../public/assets/images/grey_wave.svg";

import Card from "./Card";
import { Constants } from "../../../styles/constants";
import BubblePoint from "./BubblePoint";
import useMediaQuery from "../../utils/useMediaQuery";

const About = () => {
  const isLarge = useMediaQuery("(min-width:900px)");
  const [slideActive, setSlideActive] = useState(1);
  const [bubbleColor, setBubbleColor] = useState(Constants.softPurple);
  const [fontColor, setFontColor] = useState(Constants.white);
  const [pointPosition, setPointPosition] = useState(-329);
  const [flip, setFlip] = useState(false);
  const cards = [
    {
      name: "Alan",
      ig: "@paramisinsal",
      img: "/assets/images/alan.webp",
      index: 1,
      backgroundColor: `${Constants.softPurple}`,
      fontColor: `${Constants.white}`,
      pointPosition: -329,
    },
    {
      name: "Luz",
      ig: "@luzbottani",
      img: "/assets/images/luz.webp",
      index: 2,
      backgroundColor: `${Constants.hardYellow}`,
      fontColor: `${Constants.black}`,
      pointPosition: 0,
    },
    {
      name: "Agustín",
      ig: "@agustin_avenali",
      img: "/assets/images/agustin.webp",
      index: 3,
      backgroundColor: `${Constants.pink}`,
      fontColor: `${Constants.black}`,
      pointPosition: 291,
      flip: true,
    },
  ];

  const handleMouseOver = card => {
    if (isLarge) {
      setPointPosition(card.pointPosition);
      setSlideActive(card.index);
      setBubbleColor(card.backgroundColor);
      setFontColor(card.fontColor);

      if (card.index === 3) {
        setFlip(true);
      } else {
        setFlip(false);
      }
    }
  };

  return (
    <AboutStyle>
      <Image src={greyWave} alt='' className='wave' />
      <div className='about-wrapper' id='nosotros'>
        <h2>NOSOTROS</h2>
        <div className='bubble' style={{ background: bubbleColor }}>
          <p style={{ color: fontColor }}>
            {slideActive === 1
              ? "Fundé Home Office para poder trabajar con amigos y personas que admiro. Una cosa llevó a la otra y, cuando me quise acordar, éramos muchas personas haciendo lo que nos gusta para nuestra comunidad y clientes."
              : slideActive === 2
              ? "Llegué a Home Office siendo una fiel oyente y hoy soy parte del equipo que desarrolla ideas y busca la manera de contar una historia, para que resuene en los oídos de las personas."
              : "Soy un curioso insaciable y apasionado de aprovechar los recursos del audio para narrar el mundo. Feliz de compartir este proyecto con gente talentosa y poder potenciar los mensajes de quienes quieran trabajar con nosotros."}
          </p>
          <BubblePoint
            color={bubbleColor}
            pointPosition={pointPosition}
            flip={flip}
          />
        </div>
        {isLarge ? (
          <div className='desktop-cards'>
            {cards.map(card => (
              <div
                className='desktop-card'
                key={card.index}
                onMouseEnter={() => handleMouseOver(card)}
              >
                <div className='info'>
                  <h3>{card.name}</h3>
                  <p>
                    <a href=''>{card.ig}</a>
                  </p>
                  <Image
                    src={card.img}
                    alt={card.name}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            spaceBetween={20}
            loop={false}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                allowTouchMove: true,
                loop: false,
              },
              768: {
                slidesPerView: 1.7,
                allowTouchMove: true,
                loop: true,
              },
              900: {
                slidesPerView: 3,
                allowTouchMove: false,
                loop: false,
              },
            }}
          >
            {cards.map(card => (
              <SwiperSlide key={card.index}>
                <Card
                  setSlideActive={setSlideActive}
                  setBubbleColor={setBubbleColor}
                  setFontColor={setFontColor}
                  info={card}
                  pointPosition={pointPosition}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </AboutStyle>
  );
};

export default About;
