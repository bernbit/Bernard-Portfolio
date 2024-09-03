import React from "react";

function ReactLogo({ width, height, circle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 89 88"
    >
      {circle}

      <g clipPath="url(#clip0_78_50)">
        <path
          fill="#58C4DC"
          d="M44.5 49.814a5.814 5.814 0 110-11.628 5.814 5.814 0 010 11.628z"
        ></path>
        <path
          stroke="#58C4DC"
          strokeWidth="2"
          d="M44.5 57.081c-16.054 0-29.069-5.857-29.069-13.08 0-7.225 13.015-13.082 29.069-13.082S73.569 36.776 73.569 44c0 7.224-13.015 13.081-29.069 13.081z"
        ></path>
        <path
          stroke="#58C4DC"
          strokeWidth="2"
          d="M55.828 50.54c-8.027 13.904-19.606 22.246-25.862 18.634-6.257-3.612-4.822-17.811 3.206-31.714 8.027-13.904 19.606-22.246 25.862-18.634 6.257 3.612 4.822 17.811-3.206 31.715z"
        ></path>
        <path
          stroke="#58C4DC"
          strokeWidth="2"
          d="M55.828 37.46c8.027 13.903 9.463 28.102 3.206 31.714-6.256 3.612-17.835-4.73-25.862-18.634-8.027-13.903-9.463-28.102-3.206-31.714 6.256-3.612 17.835 4.73 25.862 18.634z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_78_50">
          <path
            fill="#fff"
            d="M0 0H61.044V61.044H0z"
            transform="matrix(-1 0 0 1 75.022 13.478)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ReactLogo;
