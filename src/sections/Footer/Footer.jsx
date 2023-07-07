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
        </div>
        <div className='right'>
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
      </div>
    </FooterStyle>
  );
};

export default Footer;
