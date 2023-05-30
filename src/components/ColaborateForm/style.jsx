import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const ColaborateStyle = styled.div`
  h3 {
    color: ${Constants.hardPurple};
    font-family: "Aeonik-bold";
    font-size: 1.6rem;
    line-height: 106%;
    pointer-events: none;
    transform: translateY(-0.3rem);
    margin-bottom: 2rem;
    width: 90%;
  }
  .close {
    cursor: pointer;
  }
  .buttons-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;
