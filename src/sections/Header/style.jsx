import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const HeaderStyle = styled.header`
  padding: 0.8rem;
  padding-top: 0.5rem;
  background: ${Constants.white};
  z-index: 100;
  width: 100%;
  top: 0;
  transition: 0.3s all;
  &.fixed {
    position: fixed;
    transform: translateY(-100%);
    /* animation: slideDown 0.3s forwards; */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
    z-index: 1000;
    background: ${Constants.white};
  }
  &.slideUp {
    animation: slideUp 0.3s forwards;
  }
  &.slideDown {
    animation: slideDown 0.3s forwards;
  }
  .navigator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 6.5rem;
      height: auto;
    }
    > nav {
      display: none;
    }
    .menu-icon {
      width: 2rem;
      height: auto;
    }
  }
  @media (min-width: 900px) {
    .navigator {
      > nav {
        display: flex;
        gap: 2rem;
      }
      .menu-icon {
        display: none;
      }
    }
  }

  @keyframes slideDown {
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideUp {
    to {
      transform: translateY(-100%);
    }
  }
`;
