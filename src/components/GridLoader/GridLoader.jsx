import React from "react";
import { GridLoaderStyle } from "./style";

const GridLoader = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <GridLoaderStyle className='grid-loader'>
      {cards.map((card, i) => (
        <div
          className='card'
          key={i}
          style={{ animationDelay: `0.${i}s` }}
        ></div>
      ))}
    </GridLoaderStyle>
  );
};

export default GridLoader;
