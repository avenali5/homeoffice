import React, { useEffect, useState } from "react";
import { Spotify } from "react-spotify-embed";
import { PodcastStyle } from "../styles/PodcastStyle";
import { Constants } from "../styles/constants";
import { podcasts } from "../src/utils/podcasts";
import Button from "../src/components/Button/Button";
import ColaborateIcon from "../src/components/ColaborateIcon/ColaborateIcon";
import ColaborateForm from "../src/components/ColaborateForm/ColaborateForm";
import Header from "../src/sections/Header/Header";
import Footer from "../src/sections/Footer/Footer";
import Image from "next/image";
import Head from "next/head";
import headphonesIcon from "../public/assets/icons/headphones.svg";
import curlyArrow from "../public/assets/icons/curly_arrow.svg";
import Slider from "../src/sections/Podcasts/Slider";
import { useRouter } from "next/router";
import Menu from "../src/components/Menu/Menu";
import Loader from "../src/components/Loader/Loader";

const Show = ({ podcast }) => {
  const [totalDescription, setTotalDescription] = useState(false);
  const [colaborate, setColaborate] = useState(false);
  const [menu, setMenu] = useState(false);

  const { query } = useRouter();

  return (
    <PodcastStyle>
      <Head>
        <title>
          Home Office ― {podcast.title} {podcast.subtitle}
        </title>
        <meta name='description' content='La casa de los podcasts' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='transition' />
      <Loader />
      <Menu setMenu={setMenu} />

      <Header lineBackground={podcast.accentColor} setMenu={setMenu} />
      <div className='page-wrapper'>
        <div className='top'>
          <div className='title'>
            <div className='tags'>
              {Array.isArray(podcast.tags) ? (
                podcast.tags.map((tag, i) => (
                  <span
                    key={tag}
                    style={{
                      background: `${podcast.accentColor}40`,
                      color: podcast.accentColor,
                    }}
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span
                  style={{
                    background: `${podcast.accentColor}40`,
                    color: podcast.accentColor,
                  }}
                >
                  {podcast.tag}
                </span>
              )}
            </div>
            <h1>
              {podcast.title} <br />
            </h1>
            <span>{podcast.subtitle}</span>
            <div className='buttons-container'>
              <a href={podcast.links} target='_blank'>
                <Button
                  backgroundColor={podcast.accentColor}
                  fontColor={Constants.white}
                  fullWidth
                >
                  <Image src={headphonesIcon} alt='' />
                  ¡Escuchar serie completa!
                </Button>
              </a>
              <Button
                fontColor={podcast.accentColor}
                backgroundColor={Constants.white}
                fullWidth
                onClick={() => setColaborate(true)}
              >
                <ColaborateIcon color={podcast.accentColor} />
                Colaborar con Home Office
              </Button>
            </div>
          </div>
          <div className='player-wrapper'>
            <div className='listen-to'>
              <span>
                {podcast.firstEpisode
                  ? "Escuchá el primer episodio!"
                  : "Escuchá el trailer!"}
              </span>
              <Image src={curlyArrow} alt='' />
            </div>
            <Spotify
              className='player'
              link={`https://open.spotify.com/episode/${podcast.playerId}`}
            />
            <div className='description'>
              <h3>Acerca de</h3>
              <p>
                {!totalDescription
                  ? `${podcast.description.slice(0, 200)}...`
                  : podcast.description.slice(0, podcast.description.length)}
                <b onClick={() => setTotalDescription(!totalDescription)}>
                  {" "}
                  Ver {totalDescription ? "menos" : "más"}
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className='buttons-container'>
          <a href={podcast.links} target='_blank'>
            <Button
              backgroundColor={podcast.accentColor}
              fontColor={Constants.white}
              fullWidth
            >
              <Image src={headphonesIcon} alt='' />
              ¡Escuchar serie completa!
            </Button>
          </a>
          <Button
            fontColor={podcast.accentColor}
            backgroundColor={Constants.white}
            fullWidth
            onClick={() => setColaborate(true)}
          >
            <ColaborateIcon color={podcast.accentColor} />
            Colaborar con Home Office
          </Button>
        </div>
        <Slider
          slidesPerView={1.4}
          initialSlide={podcast.id - 1}
          spaceBetween={10}
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
              navigation: true,
            },
            1201: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
        />
      </div>
      <Image
        className='wave'
        src={podcast.waveImg}
        alt=''
        width={500}
        height={500}
      />
      {colaborate && <ColaborateForm onClose={() => setColaborate(false)} />}
      <Footer color={podcast.accentColor} />
    </PodcastStyle>
  );
};

export default Show;
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  const podcast = podcasts.find(podcast => podcast.slug === slug);

  return {
    props: {
      podcast,
    },
  };
}
