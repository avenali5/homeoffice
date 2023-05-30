import React from "react";

const WaveBackground = ({ color }) => {
  return (
    // <svg
    //   width='1442'
    //   height='669'
    //   viewBox='0 0 1442 669'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     opacity='0.2'
    //     d='M1171.5 245.5C948 245.5 693 43.5 393.5 102.5C94 161.5 0 272.5 0 272.5V669H1442V0C1355.83 81.8333 1395 245.5 1171.5 245.5Z'
    //     fill={color}
    //   />
    // </svg>
    <svg
      width='390'
      height='472'
      viewBox='0 0 390 472'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.2'
        d='M117 1C50.6 1 10 58.3333 -2 87V471.5H387.5V38.5C391.5 37.1667 393.1 35.3 367.5 38.5C335.5 42.5 331 69 276.5 67C222 65 200 1 117 1Z'
        fill={color}
      />
    </svg>
  );
};

export default WaveBackground;
