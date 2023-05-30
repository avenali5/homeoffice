import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const ContactStyle = styled.div`
  .form-wrapper {
    h3 {
      color: ${Constants.hardPurple};
      font-family: "Aeonik-black";
      text-align: left;
      font-size: 1.6rem;
      line-height: 0.8;
    }
    .close {
      cursor: pointer;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      margin-top: 2rem;
      .input-group {
        width: 100%;
        .input {
          width: 100%;
          height: 100%;
          background: #f5f5f5;
          border: 1px solid black;
          border-radius: 5px;
          padding: 15px 19px;
          outline: none;
        }
      }
      .top {
        display: flex;
        gap: 0.5rem;
        .name {
        }
        .email {
        }
      }
      .subject {
      }
      .message {
        textarea {
          resize: vertical;
        }
      }
    }
  }
  .success-wrapper,
  .error-wrapper {
    opacity: 0;
    transform: scale(0.8);
    animation: showUp2 0.4s forwards;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 24px;
    h3 {
      font-size: 1.7rem;
      line-height: 1;
    }
    p {
      margin: 0;
      margin-top: 0.4rem;
    }
    img {
      border-radius: 200px;
      // border: 1px solid black;
      box-shadow: 2px 2px 0 black;
    }
    button {
      margin-top: 1rem;
    }
  }

  @keyframes showUp2 {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
