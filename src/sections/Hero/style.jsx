import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const HeroStyle = styled.section`
  border-radius: 12px;
  padding-top: 3.5rem;
  padding-bottom: 10rem;
  // overflow: hidden;
  position: relative;
  margin: 1rem;
  // max-width: 65rem;
  .header {
    z-index: 0;
    top: 0;
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%) !important;
    > header {
      height: 19rem;
      border: 1px solid;
      box-shadow: ${Constants.boxShadow};
      border-radius: 12px;
    }
  }
  .hero {
    background: ${Constants.yellow};
    border-radius: 12px;
    min-height: 34rem;
    text-align: center;
    border: 1px solid;
    box-shadow: ${Constants.boxShadow};
    z-index: 2;
    position: relative;
    padding-top: 4rem;
    left: 50%;
    transform: translateX(-50%) !important;
    h1 {
      font-family: "Aeonik-black";
      color: ${Constants.hardPurple};
      font-size: 2rem;
      padding: 0 1rem;
      span {
        font-family: "DM-Serif";
        font-weight: bold;
      }
    }
    .arrow {
      position: absolute;
      bottom: 10rem;
      left: 50%;
      transform: translateX(-50%);
      animation: float 3s infinite;
    }
    .illustration-three {
      position: absolute;
      bottom: -9rem;
      width: 25rem;
      height: auto;
      left: 50%;
      transform: translateX(-50%);
    }
    .characters-container {
      display: none;
    }
  }
  @media (min-width: 700px) {
    .hero {
      h1 {
        font-size: 2.5rem;
      }
      .illustration-three {
        width: 30rem;
        bottom: -12rem;
      }
    }
  }

  @media (min-width: 1000px) {
    width: 95%;
    max-width: 80rem;
    margin: 1rem auto 0;
    .hero {
      h1 {
        max-width: 40rem;
        margin: 0 auto;
        // display: flex;
      }
      .illustration-three {
        display: none;
      }
      .characters-container {
        display: block;
        position: relative;
        height: 27rem;
        img {
          position: absolute;
          transform: scale(0.6);
          transform-origin: bottom left;
          transition: 0.3s all;
          &.edit {
            left: -4rem;
            bottom: -6rem;
            z-index: 5;
          }
          &.skate {
            left: -8rem;
            bottom: 9rem;
            z-index: 2;
          }
          &.voz {
            left: 7rem;
            bottom: -3rem;
            z-index: 3;
            transform-origin: bottom left;
          }
          &.perro {
            left: 20rem;
            bottom: -6rem;
            z-index: 9;
          }
          &.siesta {
            right: 14rem;
            bottom: -3rem;
            z-index: 7;
            transform-origin: bottom center;
          }
          &.planta {
            right: 12rem;
            bottom: -2rem;
            z-index: 4;
            transform-origin: bottom center;
          }
          &.alan {
            right: 3rem;
            bottom: -6rem;
            z-index: 8;
            transform-origin: bottom center;
          }
          &.agus {
            right: 2.5rem;
            bottom: -3rem;
            z-index: 6;
            transform-origin: bottom right;
          }
          &.luz {
            right: -4rem;
            bottom: -3rem;
            z-index: 1;
            transform-origin: bottom right;
          }
        }
      }
    }
  }
`;
