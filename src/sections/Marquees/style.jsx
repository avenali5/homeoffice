import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const MarqueesStyle = styled.section`
  overflow: hidden;
  background: ${Constants.white};
  padding: 4rem 0 5rem;
  img {
    width: 230vw;
    position: relative;
    left: 50%;
  }
  .marquee-purple {
    transform: translate(-10%, 3rem) rotate(10deg);
  }
  .marquee-yellow {
    transform: translate(-80%, -4rem) rotate(-10deg);
  }
  @media (min-width: 690px) {
    padding: 15rem 0 5rem;
    .marquee-purple {
      transform: translate(-30%, -2rem) rotate(10deg);
    }
    .marquee-yellow {
      transform: translate(-90%, -4rem) rotate(-10deg);
    }
  }
  @media (min-width: 890px) {
    padding-bottom: 15rem;
    img {
      width: 300vw;
    }
    .marquee-purple {
      transform: translate(-45%, -2rem) rotate(10deg);
    }
    .marquee-yellow {
      transform: translate(-55%, -4rem) rotate(-10deg);
    }
  }
`;
