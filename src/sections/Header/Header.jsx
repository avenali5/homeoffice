import React, { useState } from "react";
import { HeaderStyle } from "./style";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";
import menuIcon from "../../../public/assets/icons/menu.svg";
import Link from "next/link";
import Nav from "../../components/Nav/Nav";

const Header = ({
  setMenu,
  lineBackground,
  setSeparatedContactForm,
  fixed,
}) => {
  const handleMenu = () => {
    const menu = document.querySelector(".menu-wrapper");
    menu.classList.add("open");
  };
  return (
    <HeaderStyle className={fixed ? "header fixed" : ""}>
      <div className='navigator'>
        <Link href={"/"}>
          <Image src={logo} alt='Home Office' className='logo' />
        </Link>
        <Nav
          lineBackground={lineBackground}
          setSeparatedContactForm={setSeparatedContactForm}
        />
        <Image
          src={menuIcon}
          alt='Menu'
          className='menu-icon'
          onClick={handleMenu}
        />
      </div>
    </HeaderStyle>
  );
};

export default Header;
