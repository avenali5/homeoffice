import React from "react";

const BubblePoint = ({ color, pointPosition, flip }) => {
  return (
    <svg
      width='35'
      height='42'
      viewBox='0 0 35 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        transform: `translate(${pointPosition}px, 90%) scaleX(${
          flip ? -1 : 1
        })`,
      }}
    >
      <path
        d='M1.3999 33.4477V4C1.3999 2.34315 2.74305 1 4.3999 1H27.958C30.4735 1 31.8721 3.9098 30.3006 5.87409L6.74251 35.3217C4.97098 37.5362 1.3999 36.2835 1.3999 33.4477Z'
        fill={color}
        stroke='url(#paint0_linear_258_479)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_258_479'
          x1='13.5'
          y1='9'
          x2='13.5'
          y2='5.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stop-opacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BubblePoint;
