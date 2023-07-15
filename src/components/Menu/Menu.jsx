import React, { useState } from "react";
import { MenuStyle } from "./style";
import Nav from "../Nav/Nav";
import Image from "next/image";
import closeIcon from "../../../public/assets/icons/close_menu.svg";
import ContactForm from "../ContactForm/ContactForm";

const Menu = ({ menu }) => {
  const [separatedContactForm, setSeparatedContactForm] = useState(false);

  const handleMenu = () => {
    const menu = document.querySelector(".menu-wrapper");
    menu.classList.remove("open");
  };
  return (
    <MenuStyle className='menu-wrapper'>
      {menu}
      <Image src={closeIcon} alt='' className='close' onClick={handleMenu} />
      <div>
        <Nav setSeparatedContactForm={setSeparatedContactForm} />
      </div>
      {separatedContactForm && (
        <ContactForm onClose={() => setSeparatedContactForm(false)} />
      )}
    </MenuStyle>
  );
};

export default Menu;
