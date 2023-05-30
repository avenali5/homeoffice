import React from "react";
import { MenuStyle } from "./style";
import Nav from "../Nav/Nav";

const Menu = ({ open }) => {
  return (
    <MenuStyle>
      <div className={`${open ? "open" : ""} circle`}>
        <Nav />
      </div>
    </MenuStyle>
  );
};

export default Menu;
