import styled from "styled-components";

export const MenuStyle = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    padding: 4rem 1rem;
    a,
    span {
      font-size: 2rem;
    }
  }
  @media (min-width: 900px) {
    display: none;
  }
`;
