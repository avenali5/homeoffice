import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const PodcastsStyle = styled.section`
  background: linear-gradient(180deg, #8e87e6 53.59%, #fafafa 53.59%);
  padding-bottom: 1rem;
  .title {
    max-width: 80rem;
    margin: 0 auto;
    h2 {
      padding: 1rem;
      font-size: 1.8rem;
      color: ${Constants.white};
    }
  }
  .swiper {
    max-width: 80rem;
    margin: 87px auto 64px;
    padding-bottom: 0.3rem;
    .swiper-slide {
      a {
        display: block;
        > img {
          box-shadow: ${Constants.boxShadow};
          border: 1px solid black;
          border-radius: 5px;
          object-fit: cover;
          width: 100% !important;
          height: 100% !important;
          user-select: none;
        }
      }
    }
    .arrow {
      &.swiper-button-next {
        padding-right: 1rem;
      }
      &.swiper-button-prev {
        padding-left: 1rem;
      }
      &:after {
        display: none;
      }
    }
  }
  .button-container {
    padding: 0 1rem;
  }
  @media (min-width: 768px) {
    padding: 4rem 1rem;
    .title {
      h2 {
        font-size: 3rem;
      }
    }
    .button-container {
      width: fit-content;
      margin: 0 auto;
    }
  }
  @media (min-width: 1100px) {
    .swiper {
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding: 1rem;
      .swiper-slide {
        transition: 0.3s all;
        &:hover {
          transform: translateY(-0.4rem);
        }
      }
    }
  }
`;
