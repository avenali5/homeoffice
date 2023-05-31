import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const FooterStyle = styled.footer`
  .footer-wrapper {
    padding: 3rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }
  .left {
    .logo {
      width: 10rem;
      height: auto;
      margin-bottom: 1rem;
    }
    .find-us {
      h4 {
        margin-bottom: 0.5rem;
      }
      .social {
        display: flex;
        gap: 0.5rem;
        a {
          img {
            width: 2rem;
            height: auto;
          }
        }
      }
    }
  }
  .right {
    h4 {
      margin-bottom: 0.5rem;
    }
    .platforms {
      display: flex;
      flex-direction: column;

      .column {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (min-width: 768px) {
    .footer-wrapper {
      flex-direction: row;
      max-width: 60rem;
      margin: 0 auto;
      padding: 4rem 0;
    }
    .left {
      width: 50%;
      .logo {
        margin-bottom: 3rem;
      }
    }
    .right {
      .platforms {
        flex-direction: row;
        gap: 3rem;
        .column {
        }
      }
    }
  }
`;
