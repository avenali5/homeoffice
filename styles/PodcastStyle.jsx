import styled from "styled-components";
import { Constants } from "./constants";

export const PodcastStyle = styled.div`
  background: ${Constants.white};
  .transition {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 1000;
    transition: 0.3s all;
    animation: fadeOut 0.6s forwards;
  }
  .wave {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    transform: translateY(6rem);
    z-index: 0;
  }
  .page-wrapper {
    position: relative;
    z-index: 1;
  }
  .title {
    padding: 1rem;
    padding-top: 2rem;
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      span {
        border-radius: 200px;
        padding: 8px 11px;
        font-size: 0.9rem;
        font-family: "Aeonik-bold";
      }
    }
    h1 {
      margin: 0.5rem 0 1rem;
      font-size: 4rem;
      line-height: 90%;
    }
    > span {
      font-size: 2.8rem;
      opacity: 0.7;
      font-weight: bold;
    }
    .buttons-container {
      display: none;
    }
  }
  .player-wrapper {
    padding: 0 1rem;
    .listen-to {
      display: none;
      img {
        width: 1rem;
        height: auto;
      }
    }
    iframe {
      width: 100%;
      border: 1px solid black;
      box-shadow: ${Constants.boxShadow};
      display: flex;
      justify-content: center;
      height: 22.1rem;
      border-radius: 15px !important;
      margin-bottom: 2rem;
    }
    .description {
      margin-bottom: 2rem;
      h3 {
        opacity: 0.5;
        margin-bottom: 1rem;
      }
      b {
      }
    }
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  .swiper {
    margin: 5rem 0 4rem;
    .arrow {
      display: none;
    }
    .swiper-slide {
      a {
        display: block;
        > img {
          border: 1px solid black;
          box-shadow: ${Constants.boxShadow};
          border-radius: 5px;
          object-fit: cover;
          width: 100% !important;
          height: 100% !important;
          user-select: none;
        }
      }
    }
  }

  @media (min-width: 900px) {
    header {
      padding: 1rem 2rem;
      background: none;
    }
    .page-wrapper {
      max-width: 65rem;
      margin: 0 auto;
      min-height: 100vh;
      .top {
        padding-top: 5rem;
        display: flex;
        flex-direction: row-reverse;
        justify-content: start;
        gap: 3rem;
        .player-wrapper {
          max-width: 353px;
        }
      }
      .player-wrapper {
        position: relative;
        .listen-to {
          display: block;
          position: absolute;
          top: 0;
          transform: translate(100%, -100%);
          right: 0;
          span {
            position: absolute;
            width: max-content;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            font-family: "Aeonik-bold";
          }
          img {
            transform: translateY(1.4rem);
            width: 2.3rem;
            height: auto;
          }
        }
      }
      .title {
        padding-top: 0;
        grid-column: 2 / 3;
        grid-row: 2 /3;
        .tags {
          span {
            border: 2px solid black;
            background: none !important;
            color: black !important;
          }
        }
        h1 {
          font-size: 5rem;
        }
        .buttons-container {
          display: flex;
          flex-direction: row;
          margin-top: 3rem;
          padding: 0;
          a,
          button {
            width: max-content !important;
            display: flex;
            align-items: Center;
            img,
            svg {
              transform: translateY(0.1rem);
            }
          }
        }
      }
      .description {
        p {
          font-size: 0.9rem;
          b {
            cursor: pointer;
          }
        }
      }
      > .buttons-container {
        display: none;
      }
      .swiper {
        padding: 1rem 4rem;
        max-width: 1200px;
        .swiper-slide {
          transition: 0.3s all;
          &:hover {
            transform: translateY(-0.4rem);
          }
        }
        .arrow {
          display: block;
          &.swiper-button-next {
            padding-right: 3rem;
          }
          &.swiper-button-prev {
            padding-left: 0rem;
          }
          &:after {
            display: none !important;
          }
        }
      }
    }
  }

  @media (min-width: 1100px) {
    .page-wrapper {
      max-width: 1200px;
      .top {
        .player-wrapper {
          max-width: 400px;
        }
        .title {
          h1 {
            font-size: 7rem;
            max-width: 650px;
          }
          > span {
            font-size: 3.5rem;
          }
        }
      }
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
      pointer-events: none;
    }
  }
`;
