import React from "react";
import { ButtonStyle } from "./style";

const Button = ({
  children,
  type,
  fontColor,
  backgroundColor,
  onClick,
  fullWidth,
}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      className={type}
      style={{
        color: fontColor,
        background: backgroundColor,
        width: fullWidth && "100%",
      }}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
