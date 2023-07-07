import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const AboutStyle = styled.section`
  padding: 3rem 1rem;
  background: ${Constants.white};
  position: relative;
  z-index: 1;
  .about-wrapper {
    scroll-margin-top: 10vh;
  }
  .wave {
    width: 100vw;
    height: auto;
    position: absolute;
    left: 0;
    bottom: -6rem;
  }
  h2 {
    color: ${Constants.hardPurple};
    margin-bottom: 2rem;
    font-family: "Aeonik-black";
  }
  .bubble {
    box-shadow: ${Constants.boxShadow};
    border: 1px solid black;
    border-radius: 18px;
    padding: 24px;
    position: relative;
    p {
      line-height: 21px;
      font-weight: 400;
    }
    svg {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 90%);
      width: 2rem;
      height: auto;
      filter: drop-shadow(${Constants.boxShadow});
      transition: 0.3s all;
    }
  }
  .swiper {
    margin-top: 3rem;
    padding: 1rem 0;
    .swiper-wrapper {
      .swiper-slide {
        border: 1px solid black;
        border-radius: 5px;
        padding: 2rem;
        box-shadow: ${Constants.boxShadow};
        background: ${Constants.white};
        h3 {
          color: ${Constants.hardPurple};
          font-size: 1.8rem;
        }
        p {
          a {
            color: ${Constants.softPurple};
          }
        }
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (min-width: 900px) {
    .about-wrapper {
      max-width: 60rem;
      margin: 0 auto;
    }
    h2 {
      font-size: 2rem;
    }
    .bubble {
      p {
        font-size: 1.2rem;
      }
    }
    .desktop-cards {
      display: flex;
      position: relative;
      margin: 5rem 0;
      gap: 1rem;
    }
    .desktop-card {
      border: 1px solid black;
      border-radius: 5px;
      padding: 2rem;
      box-shadow: ${Constants.boxShadow};
      background: ${Constants.white};
      h3 {
        color: ${Constants.hardPurple};
        font-size: 1.8rem;
      }
      p {
        a {
          color: ${Constants.softPurple};
        }
      }
      img {
        width: 100%;
        height: auto;
      }
    }
    .swiper {
      .swiper-slide {
        img {
          margin-top: 2rem;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .bubble {
      svg {
        transform: translate(-50%, 90%) !important;
      }
    }
  }
`;
