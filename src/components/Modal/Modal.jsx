import React, { useEffect } from "react";
import { ModalStyle } from "./style";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    });
  }, []);

  return (
    <ModalStyle>
      <div className='modal-box'>{children}</div>
    </ModalStyle>
  );
};

export default Modal;
