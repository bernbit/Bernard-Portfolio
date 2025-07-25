import React from "react";

function ViteLogo({ width, height, circle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 88 88"
    >
      <g clipPath="url(#clip0_438_6)">
        {circle}
        <path
          fill="url(#paint0_linear_438_6)"
          d="M69.585 28.104 44.454 72.896a1.368 1.368 0 0 1-2.379.01l-25.63-44.798c-.574-1.003.287-2.218 1.427-2.015l25.159 4.483q.242.042.485-.001L68.148 26.1c1.136-.207 2 .999 1.437 2.004"
        ></path>
        <path
          fill="url(#paint1_linear_438_6)"
          d="m55.015 20.214-18.598 3.633a.68.68 0 0 0-.55.627l-1.145 19.259a.682.682 0 0 0 .835.704l5.178-1.191a.682.682 0 0 1 .823.8l-1.538 7.508a.682.682 0 0 0 .867.787l3.198-.968a.682.682 0 0 1 .868.789l-2.445 11.794c-.153.737.831 1.14 1.242.507l.274-.422L59.18 33.896a.681.681 0 0 0-.74-.973l-5.33 1.025a.682.682 0 0 1-.785-.857l3.478-12.02a.682.682 0 0 0-.787-.857"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_438_6"
          x1="15.819"
          x2="46.965"
          y1="24.493"
          y2="66.929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41D1FF"></stop>
          <stop offset="1" stopColor="#BD34FE"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_438_6"
          x1="41.587"
          x2="47.208"
          y1="21.201"
          y2="59.892"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEA83"></stop>
          <stop offset="0.083" stopColor="#FFDD35"></stop>
          <stop offset="1" stopColor="#FFA800"></stop>
        </linearGradient>
        <clipPath id="clip0_438_6">
          <path fill="#fff" d="M0 0h88v88H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ViteLogo;
