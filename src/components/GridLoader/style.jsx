import styled from "styled-components";

export const GridLoaderStyle = styled.div`
  .card {
    background: lightgray !important;
    animation: staggerAnimation 1s ease-in-out infinite;
    box-shadow: none !important;
    transition: 0.3s all;
    opacity: 0.2;
  }

  @keyframes staggerAnimation {
    0%,
    100% {
      opacity: 0.2;
    }

    50% {
      opacity: 0.4;
    }
  }
`;
