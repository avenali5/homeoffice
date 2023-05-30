import React from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";
import close from "../../../public/assets/icons/close.svg";
import { ColaborateStyle } from "./style";
import { Constants } from "../../../styles/constants";
import Button from "../Button/Button";
import coffeeIcon from "../../../public/assets/icons/coffee.svg";
import coinIcon from "../../../public/assets/icons/coin.svg";

const ColaborateForm = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ColaborateStyle>
        <Image src={close} alt='Cerrar' className='close' onClick={onClose} />
        <h3>¿Querés colaborar con Home Office?</h3>
        <div className='buttons-wrapper'>
          <a
            href='https://cafecito.app/homeofficepodcast'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              type='primary'
              backgroundColor={Constants.hardPurple}
              fontColor={Constants.white}
              fullWidth
            >
              <Image src={coffeeIcon} alt='' />
              Invitar un cafecito
            </Button>
          </a>
          <a
            href='https://paypal.me/homeofficepodcast'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              type='primary'
              backgroundColor='#FEC43A'
              fontColor={Constants.black}
              fullWidth
            >
              <Image src={coinIcon} alt='' />
              Enviar por PayPal
            </Button>
          </a>
        </div>
      </ColaborateStyle>
    </Modal>
  );
};

export default ColaborateForm;
