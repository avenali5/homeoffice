import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const BrandsStyle = styled.section.attrs({
  id: "marcas",
})`
  text-align: center;
  background: ${Constants.white};
  padding: 1rem;
  padding-bottom: 6rem;
  position: relative;

  h2 {
    color: ${Constants.hardPurple};
    font-family: "Aeonik-Black";
  }
  p {
    margin: 2rem 0;
  }
  .swiper {
    margin: 3rem 0;
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
  .button-container {
    transform: translateX(-50%);
    left: 50%;
    position: relative;
    display: grid;
    place-items: center;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      max-width: 43rem;
      margin: 2rem auto;
    }
    .swiper {
      max-width: 50rem;
      margin: 3rem auto;
    }
    .button-container {
      width: fit-content;
    }
  }
`;
