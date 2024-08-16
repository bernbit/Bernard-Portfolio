import React from "react";

function JSLogo({ width, height, fill = "#EDF2F4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 89 88"
    >
      <rect width="88" height="88" x="0.5" fill={fill} rx="44"></rect>
      <g clipPath="url(#clip0_78_99)">
        <path
          fill="#FFDF00"
          d="M20 19.5l4.084 44.916L44.5 68.5l20.416-4.084L69 19.5H20zm22.459 40.26l-10.795-2.154-.68-7.481h4.101l.37 4.075 2.92.582V27.667h4.083V59.76zm17.226-28.01h-9.06v10.209h8.133l-1.422 15.647-10.794 2.155v-4.163l7.002-1.398.742-8.158H46.54V27.667h13.515l-.37 4.083z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_78_99">
          <path
            fill="#fff"
            d="M0 0H49V49H0z"
            transform="translate(20 19.5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default JSLogo;
