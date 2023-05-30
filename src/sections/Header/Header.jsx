import React, { useState } from "react";
import { HeaderStyle } from "./style";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";
import menuIcon from "../../../public/assets/icons/menu.svg";
import Link from "next/link";
import Nav from "../../components/Nav/Nav";

const Header = ({ setMenu, lineBackground, setSeparatedContactForm }) => {
  return (
    <HeaderStyle>
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
          onClick={() => {
            setMenu(true);
          }}
        />
      </div>
    </HeaderStyle>
  );
};

export default Header;
