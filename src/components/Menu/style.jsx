import styled from "styled-components";

export const MenuStyle = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  transform: translateX(-100%);
  transition: 0.5s all;
  &.open {
    transform: translateX(0);
  }
  .close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    height: 2rem;
  }
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
    svg {
      display: none;
    }
  }
  @media (min-width: 900px) {
    display: none;
  }
`;
