import React from "react";

function FirebaseLogo({ width, height, fill = "#EDF2F4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 88 88"
    >
      <rect width="88" height="88" fill={fill} rx="44"></rect>
      <g clipPath="url(#clip0_78_21)">
        <path
          fill="#FF9100"
          d="M34.87 72.989a24.08 24.08 0 008.227 1.752 24.005 24.005 0 0011.019-2.24 34.277 34.277 0 01-10.742-6.8 18.433 18.433 0 01-8.503 7.288z"
        ></path>
        <path
          fill="#FFC400"
          d="M43.374 65.701a34.67 34.67 0 01-10.955-27.645 18.188 18.188 0 00-9.57.101 24.52 24.52 0 00-3.17 11.265c-.366 10.582 5.984 19.828 15.191 23.567a18.418 18.418 0 008.504-7.288z"
        ></path>
        <path
          fill="#FF9100"
          d="M43.374 65.701a18.475 18.475 0 002.758-9.12c.306-8.82-5.574-16.408-13.713-18.525a34.669 34.669 0 0010.955 27.645z"
        ></path>
        <path
          fill="#DD2C00"
          d="M45.222 13.263a34.648 34.648 0 00-12.806 24.795c8.138 2.118 14.018 9.705 13.713 18.526a18.514 18.514 0 01-2.759 9.12 34.224 34.224 0 0010.742 6.8 24.476 24.476 0 0014.09-21.374c.215-6.187-2.143-11.701-5.474-16.356-3.517-4.922-17.506-21.511-17.506-21.511z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_78_21">
          <path
            fill="#fff"
            d="M0 0H49V62H0z"
            transform="translate(19.5 13)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FirebaseLogo;
