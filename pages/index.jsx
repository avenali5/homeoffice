import Head from "next/head";
import Hero from "../src/sections/Hero/Hero";
import Podcasts from "../src/sections/Podcasts/Podcasts";
import Marquees from "../src/sections/Marquees/Marquees";
import Brands from "../src/sections/Brands/Brands";
import About from "../src/sections/About/About";
import Footer from "../src/sections/Footer/Footer";
import Menu from "../src/components/Menu/Menu";
import { useState } from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import Loader from "../src/components/Loader/Loader";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [separatedContactForm, setSeparatedContactForm] = useState(false);

  return (
    <main>
      <Head>
        <title>Home Office ― La casa de los podcasts</title>
        <meta name='description' content='La casa de los podcasts' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Loader />
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
