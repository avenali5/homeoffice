import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const LoaderStyle = styled.div`
  position: fixed;
  height: 5px;
  width: 0;
  background: ${Constants.black};
  top: 0;
  z-index: 1001;
  &.loading {
    animation: load 1.5s forwards;
  }

  @keyframes load {
    to {
      width: 100%;
    }
  }
`;
