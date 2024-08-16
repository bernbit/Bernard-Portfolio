import React from "react";

function VSCodeLogo({ width, height, fill = "#EDF2F4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 89 88"
    >
      <rect width="88" height="88" x="0.5" fill={fill} rx="44"></rect>
      <g clipPath="url(#clip0_80_167)">
        <path
          fill="#3C99D6"
          d="M58.81 17.5L37.433 38.7 23.3 28.1 18 29.867v26.5l5.3 3.533 14.133-10.6 21.024 21.2L71 65.2V22.623L58.81 17.5zM23.3 51.067V36.933L32.133 44 23.3 51.067zM58.633 54.6L44.5 44l14.133-10.6v21.2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_80_167">
          <path
            fill="#fff"
            d="M0 0H53V53H0z"
            transform="translate(18 17.5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default VSCodeLogo;
