import React from "react";

function PrismaLogo({ width, height, circle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 88 88"
    >
      {circle}
      <g clipPath="url(#clip0_435_70)">
        <path
          fill="#0C344B"
          fillRule="evenodd"
          d="m62.75 60.419-25.142 7.437c-.768.228-1.504-.437-1.343-1.212l8.982-43.023c.168-.804 1.28-.932 1.63-.187l16.63 35.322a1.2 1.2 0 0 1-.757 1.663m4.311-1.755L47.806 17.766a3.09 3.09 0 0 0-2.633-1.76 3.06 3.06 0 0 0-2.814 1.459L21.476 51.297a3.16 3.16 0 0 0 .037 3.396L31.72 70.509a3.28 3.28 0 0 0 3.688 1.356L65.04 63.1a3.25 3.25 0 0 0 2.039-1.763 3.18 3.18 0 0 0-.018-2.673"
          clipRule="evenodd"
        ></path>
        <path
          fill="#EDF2F4"
          d="m62.75 60.419-25.142 7.437c-.768.228-1.504-.437-1.343-1.212l8.982-43.023c.168-.804 1.28-.932 1.63-.187l16.63 35.322a1.2 1.2 0 0 1-.757 1.663"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_435_70">
          <path fill="#fff" d="M0 0h88v88H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PrismaLogo;
