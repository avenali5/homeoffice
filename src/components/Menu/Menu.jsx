import React from "react";
import { MenuStyle } from "./style";
import Nav from "../Nav/Nav";
import Image from "next/image";
import closeIcon from "../../../public/assets/icons/close_menu.svg";
const Menu = ({ setMenu }) => {
  return (
    <MenuStyle>
      <Image
        src={closeIcon}
        alt=''
        className='close'
        onClick={() => setMenu(false)}
      />
      <div>
        <Nav />
      </div>
    </MenuStyle>
  );
};

export default Menu;
