import React, { useState } from "react";
import { BrandsStyle } from "./style";
import { Constants } from "../../../styles/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Button from "../../components/Button/Button";
import Image from "next/image";
import planeIcon from "../../../public/assets/icons/plane.svg";
import ContactForm from "../../components/ContactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Autoplay]);

const Brands = () => {
  const [contact, setContact] = useState(false);
  const brands = [
    {
      alt: "Movistar",
      img: "/assets/images/brands/movistar.png",
    },
    {
      alt: "ICBC",
      img: "/assets/images/brands/icbc.png",
    },
    {
      alt: "Despegar",
      img: "/assets/images/brands/despegar.png",
    },
    {
      alt: "BBVA",
      img: "/assets/images/brands/bbva.png",
    },
    {
      alt: "Amapola",
      img: "/assets/images/brands/amapola.png",
    },
    {
      alt: "Anpro",
      img: "/assets/images/brands/anpro.png",
    },
    {
      alt: "Wezen",
      img: "/assets/images/brands/wezen.png",
    },
  ];
  return (
    <BrandsStyle>
      <div className='wrapper'>
        <div className='text'>
          <h2>¿TENÉS UNA HISTORIA QUE CONTAR?</h2>
          <p>
            Somos una productora boutique, especializada en cuidar, desarrollar
            y potenciar tus ideas. Te vamos a acompañar a preproducir, producir
            y distribuir tu podcast. Las puertas están&nbsp;abiertas.{" "}
            <b>Pasá y dejá tus consultas.</b>
          </p>
          <div className='button-container'>
            <Button
              type='primary'
              backgroundColor={Constants.hardPurple}
              fontColor={Constants.white}
              fullWidth
              onClick={() => setContact(true)}
            >
              <Image src={planeIcon} alt='Contactanos' />
              Contactanos
            </Button>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          slidesPerView={3}
        >
          {brands.map((brand, i) => (
            <SwiperSlide key={i}>
              <Image src={brand.img} alt={brand.alt} width={448} height={129} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {contact && (
        <ContactForm
          onClose={() => {
            setContact(false);
          }}
        />
      )}
    </BrandsStyle>
  );
};

export default Brands;
