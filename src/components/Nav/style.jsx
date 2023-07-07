import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const NavStyle = styled.nav`
  .link-wrapper {
    position: relative;
    cursor: pointer;
    width: fit-content;
    .line {
      width: 0;
      height: 3px;
      position: absolute;
      transition: 0.3s all;
      bottom: -5px;
    }
    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 140%;
      pointer-events: none;
      path {
        stroke-dasharray: 238;
        stroke-dashoffset: 304;
        transition: 0.8s all;
        stroke: ${Constants.softPurple};
      }
    }
    &:hover {
      svg {
        path {
          stroke-dashoffset: 0;
        }
      }
    }

    &.home {
      svg {
        top: 0.4rem;
        transform: translate(-50%, 100%);
      }
    }
    &.podcasts {
      svg {
        top: 0.4rem;
        transform: translate(-50%, 100%);
      }
    }
    &.brands {
      svg {
        top: 0.4rem;
        transform: translate(-50%, 100%);
      }
    }
    &.about {
      svg {
        top: 0.4rem;
        transform: translate(-50%, 100%);
      }
    }
    &.contact {
      svg {
        top: 0.4rem;
        transform: translate(-50%, 100%);
      }
    }
  }
`;
