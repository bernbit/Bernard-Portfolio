import React from "react";

function FigmaLogo({ width, height, fill = "#EDF2F4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 89 88"
    >
      <rect width="88" height="88" x="0.5" fill={fill} rx="44"></rect>
      <g clipPath="url(#clip0_78_30)">
        <path
          fill="#00BCFF"
          d="M44.56 44c0-4.51 3.676-8.167 8.211-8.167S60.982 39.49 60.982 44s-3.676 8.167-8.21 8.167c-4.536 0-8.212-3.657-8.212-8.167z"
        ></path>
        <path
          fill="#00CF7F"
          d="M28.139 60.333c0-4.51 3.676-8.166 8.21-8.166l4.376-2.298 3.835 2.298v8.166c0 4.51-3.676 8.167-8.21 8.167-4.535 0-8.212-3.656-8.212-8.167z"
        ></path>
        <path
          fill="#FF7361"
          d="M44.56 19.5l-4.468 7.72 4.468 8.613h8.096c4.535 0 8.21-3.656 8.21-8.166s-3.675-8.167-8.21-8.167H44.56z"
        ></path>
        <path
          fill="#FF4D12"
          d="M28.023 27.667c0 4.51 3.676 8.166 8.211 8.166l4.356 1.674 3.97-1.674V19.5h-8.326c-4.535 0-8.21 3.656-8.21 8.167z"
        ></path>
        <path
          fill="#B659FF"
          d="M28.139 44c0 4.51 3.676 8.167 8.21 8.167h8.211V35.833h-8.21c-4.535 0-8.212 3.657-8.212 8.167z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_78_30">
          <path
            fill="#fff"
            d="M0 0H34V49H0z"
            transform="translate(27.5 19.5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FigmaLogo;
