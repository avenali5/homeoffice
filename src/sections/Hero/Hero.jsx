import React, { useEffect } from "react";
import { HeroStyle } from "./style";
import { Typewriter } from "react-simple-typewriter";
import Header from "../Header/Header";
import Image from "next/image";
import arrow from "../../../public/assets/icons/arrow_down.svg";
import threePeople from "../../../public/assets/images/illustration_three.webp";

const Hero = ({ setMenu, setSeparatedContactForm }) => {
  return (
    <HeroStyle>
      <div className='header'>
        <Header
          setMenu={setMenu}
          setSeparatedContactForm={setSeparatedContactForm}
        />
      </div>
      <div className='hero'>
        <h1>
          HACEMOS HOME OFFICE PARA COMPARTIR{" "}
          <span>
            <Typewriter
              words={["IDEAS", "CONOCIMIENTOS", "CURIOSIDADES", "INQUIETUDES"]}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <Image src={arrow} alt='Scrolleá' className='arrow' />
        <Image
          src={threePeople}
          alt='Hom eoffice'
          className='illustration-three'
        />
        <div className='characters-container'>
          <Image
            src='/assets/images/characters/luz.PNG'
            alt=''
            className='luz'
            width={163}
            height={417}
          />
          <Image
            src={"/assets/images/characters/skate.PNG"}
            alt=''
            className='skate'
            width={391}
            height={399}
          />
          <Image
            src={"/assets/images/characters/voz.PNG"}
            alt=''
            className='voz'
            width={290}
            height={414}
          />
          <Image
            src={"/assets/images/characters/edit.PNG"}
            alt=''
            className='edit'
            width={331}
            height={343}
          />
          <Image
            src={"/assets/images/characters/perro.PNG"}
            alt=''
            className='perro'
            width={430}
            height={404}
          />
          <Image
            src={"/assets/images/characters/siesta.PNG"}
            alt=''
            className='siesta'
            width={394}
            height={186}
          />
          <Image
            src={"/assets/images/characters/planta.PNG"}
            alt=''
            className='planta'
            width={187}
            height={393}
          />
          <Image
            src={"/assets/images/characters/alan.PNG"}
            alt=''
            className='alan'
            width={287}
            height={394}
          />
          <Image
            src={"/assets/images/characters/agus.PNG"}
            alt=''
            className='agus'
            width={205}
            height={432}
          />
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
