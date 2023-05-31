import React, { useEffect, useLayoutEffect } from "react";
import { HeroStyle } from "./style";
import { Typewriter } from "react-simple-typewriter";
import Header from "../Header/Header";
import Image from "next/image";
import arrow from "../../../public/assets/icons/arrow_down.svg";
import threePeople from "../../../public/assets/images/illustration_three.webp";

import edit from "../../../public/assets/images/characters/edit.webp";
import skate from "../../../public/assets/images/characters/skate.webp";
import voz from "../../../public/assets/images/characters/voz.webp";
import perro from "../../../public/assets/images/characters/perro.webp";
import siesta from "../../../public/assets/images/characters/siesta.webp";
import planta from "../../../public/assets/images/characters/planta.webp";
import alan from "../../../public/assets/images/characters/alan.webp";
import agus from "../../../public/assets/images/characters/agus.webp";
import luz from "../../../public/assets/images/characters/luz.webp";

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
        <div className='wrapper'>
          <h1>
            HACEMOS HOME OFFICE PARA COMPARTIR <br />
            <span>
              <Typewriter
                words={[
                  "IDEAS",
                  "CONOCIMIENTOS",
                  "CURIOSIDADES",
                  "INQUIETUDES",
                ]}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </div>
        <Image src={arrow} alt='Scrolleá' className='arrow' />
        <Image
          src={threePeople}
          alt='Home office'
          className='illustration-three'
        />
        <div className='characters-container'>
          <Image src={luz} alt='' className='luz' width={163} height={417} />
          <Image
            src={skate}
            alt=''
            className='skate'
            width={391}
            height={399}
          />
          <Image src={voz} alt='' className='voz' width={290} height={414} />
          <Image src={edit} alt='' className='edit' width={331} height={343} />
          <Image
            src={perro}
            alt=''
            className='perro'
            width={430}
            height={404}
          />
          <Image
            src={siesta}
            alt=''
            className='siesta'
            width={394}
            height={186}
          />
          <Image
            src={planta}
            alt=''
            className='planta'
            width={187}
            height={393}
          />
          <Image src={alan} alt='' className='alan' width={287} height={394} />
          <Image src={agus} alt='' className='agus' width={205} height={432} />
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
