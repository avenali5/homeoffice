import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const BrandsStyle = styled.section.attrs({
  id: "clientes",
  className: "centered-section",
})`
  background: ${Constants.white};
  padding: 1rem;
  padding-bottom: 6rem;
  position: relative;
  scroll-margin-top: 30vh;
  .wrapper {
    text-align: left;
    display: flex;
    flex-direction: column; */
    width: 100%;
    position: relative;
     max-width: 60rem;
      margin: 2rem auto;
    .text {
      width: 100%;
      h2 {
        color: ${Constants.hardPurple};
        font-family: "Aeonik-Black";
      }
      p {
        margin: 2rem 0;
      }
      .button-container {
        position: relative;
        display: grid;
        place-items: center;
      }
    }
    .swiper {
      margin-top: 3rem;
      margin-bottom: 3rem;
      width: 100%;
      .swiper-slide {
        img {
          width: 100%;
          height: auto;
          filter: grayscale(100%);
          transition: 0.3s all;
        }
        &:hover {
          img {
            filter: none;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      max-width: 43rem;
     
    }
    .swiper {
      max-width: 50rem;
      margin: 3rem auto;
    }
    .button-container {
      width: fit-content;
    }
  }

  @media (min-width: 1100px) {
    .wrapper {
      flex-direction: row;
      align-items: center;
     
      margin: 1rem auto 0;
      gap: 2rem;
      .text {
        width: 100%;
      }
    }
  }
`;
