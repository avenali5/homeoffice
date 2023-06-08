import Head from "next/head";
import React, { useState } from "react";
import { podcasts as podcastList } from "../src/utils/podcasts";
import Image from "next/image";
import Header from "../src/sections/Header/Header";
import Footer from "../src/sections/Footer/Footer";
import Link from "next/link";
import arrow from "../public/assets/icons/arrow_down_long.svg";
import { GridPodcastStyle } from "../styles/GridPodcastStyle";
import greyWave from "../public/assets/images/grey_wave.svg";
import Menu from "../src/components/Menu/Menu";

const Podcasts = () => {
  const [menu, setMenu] = useState(false);

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

      <Header setMenu={setMenu} />
      <h2>NUESTROS PODCASTS</h2>
      <div className='grid'>
        {podcastList.map(podcast => (
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
