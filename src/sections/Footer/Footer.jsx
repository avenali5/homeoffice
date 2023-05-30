import React from "react";
import { FooterStyle } from "./style";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";

import spotify from "../../../public/assets/icons/spotify.svg";
import youtube from "../../../public/assets/icons/youtube.svg";
import instagram from "../../../public/assets/icons/instagram.svg";
import medium from "../../../public/assets/icons/medium.svg";
import facebook from "../../../public/assets/icons/facebook.svg";
import twitter from "../../../public/assets/icons/twitter.svg";
import { Constants } from "../../../styles/constants";

const Footer = ({ color }) => {
  return (
    <FooterStyle style={{ background: color ? `#${color}20` : Constants.grey }}>
      <div className='footer-wrapper'>
        <div className='left'>
          <Image src={logo} alt='Home Office' className='logo' />
          <div className='find-us'>
            <h4>Encontranos en</h4>
            <div className='social'>
              <a
                href='https://open.spotify.com/show/3XDfnTtbartdboDiKHU9Ul'
                target='_blank'
              >
                <Image src={spotify} alt='Spotify' />
              </a>
              <a
                href='https://www.youtube.com/channel/UCMbb9DocosogBUxn5EhICsw'
                target='_blank'
              >
                <Image src={youtube} alt='Youtube' />
              </a>
              <a
                href='https://www.instagram.com/homeofficepodcast/'
                target='_blank'
              >
                <Image src={instagram} alt='Instagram' />
              </a>
              <a href='https://homeofficepodcast.medium.com/' target='_blank'>
                <Image src={medium} alt='Medium' />
              </a>
              <a
                href='https://www.facebook.com/homeofficepodcast'
                target='_blank'
              >
                <Image src={facebook} alt='Facebook' />
              </a>
              <a href='https://twitter.com/HomeOPodcast' target='_blank'>
                <Image src={twitter} alt='Twitter' />
              </a>
            </div>
          </div>
        </div>
        <div className='right'>
          <h4>Escuchanos en</h4>
          <div className='platforms'>
            <div className='column'>
              <a
                href='https://open.spotify.com/show/3XDfnTtbartdboDiKHU9Ul'
                target='_blank'
              >
                Spotify
              </a>
              <a
                href='https://podcasts.apple.com/us/podcast/home-office-podcast/id1451110427'
                target='_blank'
              >
                Apple Podcasts
              </a>
              <a
                href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ZTVlODg4L3BvZGNhc3QvcnNz?hl=es'
                target='_blank'
              >
                Google Podcasts
              </a>
              <a href='' target='_blank'>
                Overcast
              </a>
            </div>
            <div className='column'>
              <a href='' target='_blank'>
                Pocket Casts
              </a>
              <a
                href='https://www.youtube.com/channel/UCMbb9DocosogBUxn5EhICsw'
                target='_blank'
              >
                Youtube
              </a>
              <a href='' target='_blank'>
                Radio Public
              </a>
              <a
                href='https://www.stitcher.com/show/home-office-la-casa-de-los-podcast'
                target='_blank'
              >
                Stitcher
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
