import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  .modal-box {
    background: ${Constants.white};
    padding: 1.5rem;
    box-shadow: ${Constants.boxShadow};
    border: 1px solid black;
    border-radius: 5px;
    width: 80%;
    max-width: 25rem;
    position: absolute;
    left: 50%;
    top: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    animation: showUp 0.4s forwards;
    .close {
      position: absolute;
      right: 1.5rem;
    }
  }
  @keyframes showUp {
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
