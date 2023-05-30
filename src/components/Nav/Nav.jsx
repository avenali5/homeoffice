import React, { useState } from "react";
import { NavStyle } from "./style";
import Link from "next/link";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Constants } from "../../../styles/constants";
import { useRouter } from "next/router";

const Nav = ({
  lineBackground = Constants.hardPurple,
  setSeparatedContactForm,
}) => {
  const [contactForm, setContactForm] = useState(false);
  const router = useRouter();

  const handleContactClick = () => {
    if (router.pathname === "/") {
      setSeparatedContactForm(true);
    } else {
      setContactForm(true);
    }
  };

  return (
    <NavStyle>
      <div className='link-wrapper'>
        <Link href='/'>Home</Link>
        <div className='line' style={{ background: lineBackground }} />
        <svg
          width='60'
          height='42'
          viewBox='0 0 60 42'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M30.8001 7.86356C25.1279 7.90822 19.017 7.58672 13.4557 8.86552C8.39024 10.0303 4.8694 14.089 3.12504 18.8506C2.1102 21.6209 2.31782 25.1282 3.02138 27.9202C3.92928 31.5229 6.10022 33.6202 9.08501 35.5904C11.1551 36.9568 13.596 37.5544 15.9779 38.1471C21.5364 39.5304 27.3563 39.7083 33.0631 39.5205C37.1266 39.3869 41.202 38.8143 45.0781 37.5684C47.8137 36.6891 50.6464 35.7321 52.7742 33.7247C56.1685 30.5226 59.276 25.1215 57.1449 20.4054C56.198 18.3101 54.836 16.9209 52.9815 15.6029C49.3514 13.0229 45.2687 10.8659 41.2689 8.92599C38.0225 7.35149 34.6849 5.94993 31.327 4.63308C28.3614 3.47012 25.3041 2.68256 22.2488 1.79993'
            stroke='#8E87E6'
            stroke-width='3'
            stroke-linecap='round'
          />
        </svg>
      </div>
      <div className='link-wrapper podcasts'>
        <Link href='/podcasts'>Nuestros podcasts</Link>
        <div className='line' style={{ background: lineBackground }} />
        <svg
          width='145'
          height='13'
          viewBox='0 0 145 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.51123 8.26664C5.28849 8.26664 8.1031 6.08875 11.7789 5.72117C16.1746 5.2816 17.4084 8.74157 20.6738 10.8407C24.8069 13.4977 27.9537 6.53529 30.0835 4.40553C30.7602 3.72879 31.5688 3.26486 32.4287 3.97652C36.3584 7.22866 37.1654 10.6892 42.4676 8.98166C46.2996 7.74765 48.5167 6.85087 51.2195 4.14812C52.9583 2.40925 57.1712 5.75144 58.7701 6.7222C60.94 8.03967 62.6927 6.77184 64.576 5.66397C68.7513 3.2079 69.1886 3.55653 73.0991 7.23701C75.7819 9.76202 77.0898 12.0119 80.6783 9.92549C82.1911 9.04593 82.6205 7.7061 83.853 6.55059C84.8168 5.64701 86.0974 5.13533 87.1993 4.43413C89.5305 2.95063 92.871 9.14214 95.7223 9.29627C98.6437 9.45418 100.889 7.77767 103.101 6.03578C104.292 5.0987 105.883 3.20249 107.563 3.11849C110.688 2.96224 112.677 7.53032 115.257 8.98166C118.821 10.9864 124.623 5.26066 127.097 3.4045C127.756 2.91095 128.883 1.38905 129.815 1.68845C131.527 2.23884 133.249 3.83664 134.505 5.06335C137.379 7.8705 139.237 7.36175 143.085 6.20738'
            stroke='black'
            stroke-width='3'
            stroke-linecap='round'
          />
        </svg>
      </div>
      <div className='link-wrapper brands'>
        <Link href='/#marcas'>Marcas</Link>
        <div className='line' style={{ background: lineBackground }} />
        <svg
          width='40'
          height='13'
          viewBox='0 0 40 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.81494 3.66304C6.71622 3.66304 11.661 2.80426 16.573 2.63341C21.3393 2.46762 26.1046 2.22942 30.8734 2.1472C32.8974 2.1123 34.0006 2.1186 35.9071 2.1186C36.6126 2.1186 38.6285 1.75563 38.0236 2.1186C35.0451 3.90566 29.2785 4.41107 26.0684 5.20748C21.5347 6.33232 19.4245 6.82212 14.9713 7.83876C14.6566 7.91062 8.82725 8.69285 8.27873 9.55481C8.12632 9.7943 15.7929 10.5731 15.9723 10.5844C18.974 10.7737 21.9746 10.8704 24.9816 10.8704'
            stroke='black'
            stroke-width='3'
            stroke-linecap='round'
          />
        </svg>
      </div>
      <div className='link-wrapper about'>
        <Link href='/#nosotros'>Nosotros</Link>
        <div className='line' style={{ background: lineBackground }} />
        <svg
          width='19'
          height='14'
          viewBox='0 0 19 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.75195 2.83342C5.05558 5.56604 9.69539 2.3186 5.26677 2.3186'
            stroke='black'
            stroke-width='3'
            stroke-linecap='round'
          />
          <path
            d='M12.4742 2.31851C12.3485 1.31347 11.2038 2.31851 13.5038 2.31851'
            stroke='black'
            stroke-width='3'
            stroke-linecap='round'
          />
          <path
            d='M2.17773 9.01109C6.00768 11.4732 17.1074 14.0898 17.1074 6.43701'
            stroke='black'
            stroke-width='3'
            stroke-linecap='round'
          />
        </svg>
      </div>
      <div className='link-wrapper contact'>
        <span onClick={handleContactClick}>Contactanos</span>
        <div className='line' style={{ background: lineBackground }} />
        <svg
          width='31'
          height='11'
          viewBox='0 0 31 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.07422 5.87036C8.86412 5.87036 15.5583 5.62153 22.3236 5.38415C24.325 5.31392 30.0752 6.22295 28.3298 5.24114C26.9324 4.45514 25.7086 3.48795 24.2399 2.81007C19.2273 0.496588 29.2895 5.71152 29.3594 6.89999C29.4883 9.0911 26.6039 9.47407 24.7261 9.47407'
            stroke='black'
            stroke-width='3'
            stroke-linecap='round'
          />
        </svg>
      </div>
      {contactForm && <ContactForm onClose={() => setContactForm(false)} />}
    </NavStyle>
  );
};

export default Nav;
