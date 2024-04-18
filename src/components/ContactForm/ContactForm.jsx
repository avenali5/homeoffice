import React, { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";
import close from "../../../public/assets/icons/close.svg";
import send from "../../../public/assets/icons/send.svg";
import error from "../../../public/assets/icons/error.svg";
import success from "../../../public/assets/icons/success.svg";
import Button from "../Button/Button";
import { ContactStyle } from "./style";
import { Constants } from "../../../styles/constants";
import emailjs from "@emailjs/browser";

const ContactForm = ({ onClose }) => {
  const [contactState, setContactState] = useState("form");
  const [sending, setSending] = useState(false);
  const form = useRef();
  const handleResult = result => {
    if (result === 1) {
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };
  const sendEmail = e => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_8rkrpuf",
        "template_v97ojxs",
        form.current,
        "lPU0WKGujVTM_vFt5"
      )
      .then(
        result => {
          setContactState("success");
          handleResult(1);
        },
        error => {
          setContactState("error");
          handleResult();
        }
      );
  };
  return (
    <Modal onClose={onClose}>
      <ContactStyle>
        {contactState === "form" ? (
          <div className='form-wrapper'>
            <Image
              src={close}
              alt='Cerrar'
              className='close'
              onClick={onClose}
            />
            <h3>¡Contactanos!</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className='top'>
                <div className='input-group name'>
                  <input
                    placeholder='Nombre'
                    name='user_name'
                    type='text'
                    className='input'
                    required
                  />
                </div>
                <div className='input-group email'>
                  <input
                    placeholder='Email'
                    name='user_email'
                    type='email'
                    className='input'
                    required
                  />
                </div>
              </div>
              <div className='input-group subject'>
                <input
                  placeholder='Asunto'
                  name='subject'
                  type='text'
                  className='input'
                  required
                />
              </div>
              <div className='input-group message'>
                <textarea
                  name='message'
                  placeholder='Tu mensaje'
                  rows={5}
                  className='input'
                  required
                />
              </div>
              <Button
                backgroundColor={Constants.hardPurple}
                fontColor={Constants.white}
                fullWidth
              >
                <Image src={send} alt='' />
                {sending ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </div>
        ) : contactState === "success" ? (
          <div className='success-wrapper'>
            <Image src={success} alt='' />
            <div className='msg'>
              <h3>¡Mensaje enviado!</h3>
              <p>Pronto nos vamos a comunicar con vos.</p>
            </div>
          </div>
        ) : (
          <div className='error-wrapper'>
            <Image src={error} alt='' />
            <div className='msg'>
              <h3>Error al enviar</h3>
              <p>Revisá tu conexión o reintentá más tarde. </p>
              <Button onClick={() => setContactState("form")}>
                Reintentar
              </Button>
            </div>
          </div>
        )}
      </ContactStyle>
    </Modal>
  );
};

export default ContactForm;
