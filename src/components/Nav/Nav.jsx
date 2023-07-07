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
      <div className='link-wrapper home'>
        <Link href='/'>Home</Link>
        <div className='line' style={{ background: lineBackground }} />
        <svg
          width='54'
          height='12'
          viewBox='0 0 54 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 6.64666C5.77726 6.64666 8.59187 4.46877 12.2677 4.10118C16.6634 3.66162 17.8972 7.12158 21.1626 9.22073C25.2957 11.8778 28.4425 4.9153 30.5722 2.78555C31.249 2.1088 32.0576 1.64487 32.9175 2.35653C36.8472 5.60868 37.6541 9.06918 42.9564 7.36168C46.7883 6.12766 49.0055 5.23088 51.7082 2.52814'
            stroke='black'
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
        <Link href='/#clientes'>Clientes</Link>
        <div className='line' style={{ background: lineBackground }} />
        <svg
          width='74'
          height='13'
          viewBox='0 0 74 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.58789 7.23701C4.27071 9.76202 5.57856 12.0119 9.16711 9.92549C10.6799 9.04593 11.1093 7.7061 12.3418 6.55059C13.3056 5.64701 14.5862 5.13533 15.6881 4.43413C18.0193 2.95063 21.3598 9.14214 24.2111 9.29627C27.1325 9.45418 29.3775 7.77767 31.5901 6.03578C32.7805 5.0987 34.3719 3.20249 36.0519 3.11849C39.1769 2.96224 41.1653 7.53032 43.7455 8.98166C47.3095 10.9864 53.1114 5.26066 55.5862 3.4045C56.2443 2.91095 57.3718 1.38905 58.3033 1.68845C60.0156 2.23884 61.7379 3.83664 62.9939 5.06335C65.8678 7.8705 67.7262 7.36175 71.5741 6.20738'
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
          width='87'
          height='12'
          viewBox='0 0 87 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.91748 2.97656C5.84716 6.22871 6.65413 9.68921 11.9564 7.9817C15.7883 6.74769 18.0055 5.85091 20.7082 3.14817C22.4471 1.4093 26.6599 4.75148 28.2588 5.72224C30.4288 7.03971 32.1814 5.77188 34.0648 4.66401C38.2401 2.20795 38.6773 2.55658 42.5879 6.23705C45.2707 8.76206 46.5785 11.0119 50.1671 8.92553C51.6799 8.04597 52.1092 6.70614 53.3418 5.55063C54.3056 4.64705 55.5862 4.13537 56.6881 3.43417C59.0193 1.95067 62.3597 8.14219 65.2111 8.29631C68.1324 8.45422 70.3774 6.77771 72.5901 5.03582C73.7805 4.09874 75.3719 2.20253 77.0518 2.11854C80.1769 1.96229 82.1653 6.53036 84.7455 7.9817'
            stroke='black'
            stroke-width='3'
            stroke-linecap='round'
          />
        </svg>
      </div>
      <div className='link-wrapper contact'>
        <span onClick={handleContactClick}>Contacto</span>
        <div className='line' style={{ background: lineBackground }} />
        <svg
          width='117'
          height='13'
          viewBox='0 0 117 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.57227 4.40553C2.24901 3.72879 3.05761 3.26486 3.91753 3.97652C7.84721 7.22866 8.65418 10.6892 13.9564 8.98166C17.7884 7.74765 20.0055 6.85087 22.7083 4.14812C24.4471 2.40925 28.66 5.75144 30.2589 6.7222C32.4288 8.03967 34.1815 6.77184 36.0649 5.66397C40.2402 3.2079 40.6774 3.55653 44.5879 7.23701C47.2707 9.76202 48.5786 12.0119 52.1671 9.92549C53.68 9.04593 54.1093 7.7061 55.3418 6.55059C56.3056 5.64701 57.5862 5.13533 58.6881 4.43413C61.0193 2.95063 64.3598 9.14214 67.2112 9.29627C70.1325 9.45418 72.3775 7.77767 74.5902 6.03578C75.7805 5.0987 77.3719 3.20249 79.0519 3.11849C82.1769 2.96224 84.1653 7.53032 86.7455 8.98166C90.3095 10.9864 96.1114 5.26066 98.5863 3.4045C99.2443 2.91095 100.372 1.38905 101.303 1.68845C103.016 2.23884 104.738 3.83664 105.994 5.06335C108.868 7.8705 110.726 7.36175 114.574 6.20738'
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
