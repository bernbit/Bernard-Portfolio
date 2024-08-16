import React from "react";

function HTMLLogo({ width, height, fill = "#EDF2F4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 89 88"
    >
      <rect width="88" height="88" x="0.5" fill={fill} rx="44"></rect>
      <g clipPath="url(#clip0_78_85)">
        <path
          fill="#FC490B"
          d="M66.789 20.188l-3.31 42.346a1.566 1.566 0 01-1.088 1.37l-17.418 5.523a1.567 1.567 0 01-.946 0l-17.418-5.522a1.566 1.566 0 01-1.088-1.371l-3.31-42.346a1.566 1.566 0 011.562-1.688h41.454c.913 0 1.633.778 1.562 1.688zm-36.09 13.139h21.572l-.65 6.003H31.168l1.338 17.115L44.5 60.247l11.993-3.802.7-8.942h-6.296v4.386l-6.565 1.762-6.526-1.762-.507-6.99h20.097l1.334-17.07H30.27l.43 5.498z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_78_85">
          <path
            fill="#fff"
            d="M0 0H51V51H0z"
            transform="matrix(-1 0 0 1 70 18.5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default HTMLLogo;
