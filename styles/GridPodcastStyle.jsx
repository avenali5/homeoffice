import styled from "styled-components";
import { Constants } from "./constants";

export const GridPodcastStyle = styled.main`
  background: ${Constants.white};
  width: 100%;
  header {
    padding: 1rem 2rem;
  }
  h2 {
    margin-top: 3rem;
    font-size: 3rem;
    text-align: center;
    color: ${Constants.hardPurple};
  }
  .grid {
    padding: 4rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
    .card {
      width: 100%;
      max-width: 254px;
      height: 254px;
      position: relative;
      overflow: hidden;
      box-shadow: ${Constants.boxShadow};
      border: 1px solid black;
      border-radius: 5px;
      > img {
        width: 100%;
        height: 100%;
        transition: 0.5s all;
      }
      .info {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 1rem;
        transform: translateY(100%);
        transition: 0.5s all;
        .title {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        p {
          margin-top: 1rem;
        }
        .arrow {
          background: #d9d9d9;
          border: 1px solid black;
          border-radius: 200px;
          height: 40px;
          width: 40px;
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: grid;
          place-items: center;
          transition: 0.3s all;
          cursor: pointer;
          img {
            width: 1rem;
            height: auto;
            transform: rotate(-90deg);
            transition: 0.3s all;
          }
          &:hover {
            background: ${Constants.hardYellow};
            img {
              transform: rotate(-130deg);
            }
          }
        }
      }
      &:hover {
        > img {
          transform: translateY(-100%);
        }
        .info {
          transform: translateY(0);
        }
      }
    }
  }
`;
