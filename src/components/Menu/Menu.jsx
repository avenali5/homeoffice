import React from "react";
import { MenuStyle } from "./style";
import Nav from "../Nav/Nav";
import Image from "next/image";
import closeIcon from "../../../public/assets/icons/close_menu.svg";

const Menu = ({ menu, setMenu }) => {
  const handleMenu = () => {
    const menu = document.querySelector(".menu-wrapper");
    menu.classList.remove("open");
  };
  return (
    <MenuStyle className='menu-wrapper'>
      {menu}
      <Image src={closeIcon} alt='' className='close' onClick={handleMenu} />
      <div>
        <Nav />
      </div>
    </MenuStyle>
  );
};

export default Menu;
