import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../src/sections/Header/Header";
import Footer from "../src/sections/Footer/Footer";
import Link from "next/link";
import arrow from "../public/assets/icons/arrow_down_long.svg";
import { GridPodcastStyle } from "../styles/GridPodcastStyle";
import greyWave from "../public/assets/images/grey_wave.svg";
import Menu from "../src/components/Menu/Menu";
import { getPodcasts } from "../src/utils/getPodcasts";
import GridLoader from "../src/components/GridLoader/GridLoader";

const Podcasts = () => {
  const [menu, setMenu] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [pods, setPods] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePods = async () => {
    setLoading(true);
    try {
      const podcastsList = await getPodcasts();
      setLoading(false);
      setPods(podcastsList);
    } catch (error) {
      setLoading(false);
      console.error("Error in fetchDataFromSheet:", error);
    }
  };

  useEffect(() => {
    handlePods();
  }, []);

  useEffect(() => {
    const header = document.querySelector(".header");
    window.onscroll = () => {
      setScrollHeight(window.scrollY);
      if (scrollHeight >= 150) {
        header.classList.add("slideDown");
        header.classList.remove("slideUp");
      } else {
        header.classList.add("slideUp");
        header.classList.remove("slideDown");
      }
    };
  }, [scrollHeight]);

  return (
    <GridPodcastStyle>
      <Head>
        <title>
          Home Office ― La casa de los podcasts | Todos nuestros podcasts
        </title>
        <meta name='description' content='La casa de los podcasts' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Menu setMenu={setMenu} />

      <Header setMenu={setMenu} fixed />
      <Header setMenu={setMenu} />
      <h2>NUESTROS PODCASTS</h2>
      <div className='grid'>
        {loading && <GridLoader />}
        {pods?.map(podcast => (
          <div className='card' key={podcast.id}>
            <Image
              src={podcast.img}
              alt={podcast.title}
              width={300}
              height={300}
            />
            <div className='info'>
              <span className='title'>
                {podcast.title} <br /> {podcast.subtitle}
              </span>
              <p>
                {podcast.description.slice(0, 100)}...{" "}
                <Link href={podcast.slug}>
                  <b>Ver más</b>
                </Link>
              </p>
              <Link href={podcast.slug}>
                <div className='arrow'>
                  <Image src={arrow} alt='' />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Image src={greyWave} alt='' className='wave' />

      <Footer />
    </GridPodcastStyle>
  );
};

export default Podcasts;
