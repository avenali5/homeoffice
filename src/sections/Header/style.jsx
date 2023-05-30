import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const HeaderStyle = styled.header`
  padding: 0.8rem;
  padding-top: 0.5rem;
  background: ${Constants.white};
  .navigator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 6.5rem;
      height: auto;
    }
    > nav {
      display: none;
    }
  }
  @media (min-width: 900px) {
    .navigator {
      > nav {
        display: flex;
        gap: 2rem;
      }
      .menu-icon {
        display: none;
      }
    }
  }
`;
