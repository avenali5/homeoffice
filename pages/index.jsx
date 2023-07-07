import Head from "next/head";
import Hero from "../src/sections/Hero/Hero";
import Podcasts from "../src/sections/Podcasts/Podcasts";
import Marquees from "../src/sections/Marquees/Marquees";
import Brands from "../src/sections/Brands/Brands";
import About from "../src/sections/About/About";
import Footer from "../src/sections/Footer/Footer";
import Menu from "../src/components/Menu/Menu";
import { useEffect, useState } from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import Loader from "../src/components/Loader/Loader";
import Header from "../src/sections/Header/Header";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [separatedContactForm, setSeparatedContactForm] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header");
    window.onscroll = () => {
      setScrollHeight(window.scrollY);
      let image1 = document.querySelector(".marquee-purple");
      let image2 = document.querySelector(".marquee-yellow");
      let value = window.scrollY;
      if (image1) {
        image1.style.marginLeft = value / -70 + "rem";
      }
      if (image2) {
        image2.style.marginLeft = value / 70 + "rem";
      }
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
    <main>
      <Head>
        <title>Home Office ― La casa de los podcasts</title>
        <meta name='description' content='La casa de los podcasts' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Loader />
      <Header fixed setSeparatedContactForm={setSeparatedContactForm} />
      <Menu setMenu={setMenu} />
      <Hero
        setMenu={setMenu}
        setSeparatedContactForm={setSeparatedContactForm}
      />
      <Podcasts />
      <Marquees />
      <Brands />
      <About />
      <Footer />
      {separatedContactForm && (
        <ContactForm onClose={() => setSeparatedContactForm(false)} />
      )}
    </main>
  );
}
