import React, { useEffect } from "react";
import { HeroStyle } from "./style";
import { Typewriter } from "react-simple-typewriter";
import Header from "../Header/Header";
import Image from "next/image";
import arrow from "../../../public/assets/icons/arrow_down.svg";
import threePeople from "../../../public/assets/images/illustration_three.webp";

import edit from "../../../public/assets/images/characters/edit.PNG";
import skate from "../../../public/assets/images/characters/skate.PNG";
import voz from "../../../public/assets/images/characters/voz.PNG";
import perro from "../../../public/assets/images/characters/perro.PNG";
import siesta from "../../../public/assets/images/characters/siesta.PNG";
import planta from "../../../public/assets/images/characters/planta.PNG";
import alan from "../../../public/assets/images/characters/alan.PNG";
import agus from "../../../public/assets/images/characters/agus.PNG";
import luz from "../../../public/assets/images/characters/luz.PNG";

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
          <Image src={luz} alt='' className='luz' />
          <Image src={skate} alt='' className='skate' />
          <Image src={voz} alt='' className='voz' />
          <Image src={edit} alt='' className='edit' />
          <Image src={perro} alt='' className='perro' />
          <Image src={siesta} alt='' className='siesta' />
          <Image src={planta} alt='' className='planta' />
          <Image src={alan} alt='' className='alan' />
          <Image src={agus} alt='' className='agus' />
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
