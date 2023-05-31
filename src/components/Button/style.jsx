import styled from "styled-components";
import { Constants } from "../../../styles/constants";

export const ButtonStyle = styled.button`
  border-radius: 5px;
  display: flex;
  align-items: Center;
  justify-content: center;
  border: 1px solid black;
  box-shadow: ${Constants.boxShadow};
  padding: 10px;
  font-size: 1rem;
  user-select: none;
  cursor: pointer;
  background: none;
  font-weight: bold;
  gap: 14px;
  letter-spacing: 1px;
  transition: 0.2s all;
  &:hover {
    transform: rotate(2deg);
  }
`;
