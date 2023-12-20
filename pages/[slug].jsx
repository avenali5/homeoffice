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
  const [colaborate, setColaborate] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header");
    window.onscroll = () => {
      setScrollHeight(window.scrollY);
    };
    if (scrollHeight >= 150) {
      header.classList.add("slideDown");
      header.classList.remove("slideUp");
    } else {
      header.classList.add("slideUp");
      header.classList.remove("slideDown");
    }
  }, [scrollHeight]);

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

      <Header lineBackground={podcast.accentColor} setMenu={setMenu} fixed />
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
                {podcast.firstEpisode.includes("TRUE")
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
              <p>{podcast.description}</p>
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
      <div
        style={{
          clipPath:
            "polygon(100% 0%, 0% 0% , 0% 65%, 1% 64.95%, 2% 64.8%, 3% 64.6%, 4% 64.3%, 5% 63.9%, 6% 63.45%, 7% 62.9%, 8% 62.25%, 9% 61.55%, 10% 60.8%, 11% 59.95%, 12% 59.05%, 13% 58.1%, 14% 57.1%, 15% 56.05%, 16% 55%, 17% 53.9%, 18% 52.8%, 19% 51.65%, 20% 50.5%, 21% 49.35%, 22% 48.2%, 23% 47.05%, 24% 45.9%, 25% 44.8%, 26% 43.75%, 27% 42.75%, 28% 41.75%, 29% 40.8%, 30% 39.9%, 31% 39.1%, 32% 38.35%, 33% 37.65%, 34% 37.05%, 35% 36.5%, 36% 36.05%, 37% 35.65%, 38% 35.35%, 39% 35.15%, 40% 35.05%, 41% 35%, 42% 35.05%, 43% 35.2%, 44% 35.45%, 45% 35.75%, 46% 36.15%, 47% 36.65%, 48% 37.2%, 49% 37.85%, 50% 38.55%, 51% 39.35%, 52% 40.2%, 53% 41.1%, 54% 42.05%, 55% 43.05%, 56% 44.1%, 57% 45.15%, 58% 46.3%, 59% 47.4%, 60% 48.55%, 61% 49.7%, 62% 50.85%, 63% 52%, 64% 53.15%, 65% 54.25%, 66% 55.35%, 67% 56.4%, 68% 57.45%, 69% 58.4%, 70% 59.35%, 71% 60.2%, 72% 61.05%, 73% 61.8%, 74% 62.45%, 75% 63.05%, 76% 63.6%, 77% 64.05%, 78% 64.4%, 79% 64.7%, 80% 64.85%, 81% 65%, 82% 65%, 83% 64.9%, 84% 64.75%, 85% 64.5%, 86% 64.2%, 87% 63.75%, 88% 63.25%, 89% 62.7%, 90% 62.05%, 91% 61.3%, 92% 60.5%, 93% 59.65%, 94% 58.75%, 95% 57.8%, 96% 56.8%, 97% 55.75%, 98% 54.65%, 99% 53.55%, 100% 52.4%)",
          width: "100%",
          height: "20rem",
          background: podcast.accentColor,
          opacity: 0.6,
          position: "fixed",
          bottom: 0,
          transform: "rotate(180deg)",
        }}
      ></div>
      {colaborate && <ColaborateForm onClose={() => setColaborate(false)} />}
      <Footer color={podcast.accentColor} />
    </PodcastStyle>
  );
};

export default Show;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSsxWbPi-THgmLjDeLIUTWpufk1gY6TMaowCL77fCg6liwhu7oTxQCdE9WiNIa4XeyrbgU1tWUrTwsZ/pub?output=tsv"
  ).then(res => res.text());

  const products = csv
    .split("\n")
    .slice(1)
    .map(row => {
      const [
        id,
        slug,
        img,
        title,
        subtitle,
        tags,
        description,
        playerId,
        accentColor,
        links,
        firstEpisode,
      ] = row.split("\t");

      const tagsArr = tags.includes(", ") ? tags.split(", ") : [tags];

      return {
        id,
        slug,
        img,
        title,
        subtitle,
        tags: tagsArr,
        description,
        playerId,
        accentColor,
        links,
        firstEpisode,
      };
    });
  const podcast = products.find(podcast => podcast.slug === slug);

  return {
    props: {
      podcast,
    },
  };
}
