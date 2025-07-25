import React from "react";

function NextJSLogo({ width, height, circle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 88 88"
    >
      {circle}
      <g clipPath="url(#clip0_432_19)">
        <mask
          id="mask0_432_19"
          width="66"
          height="66"
          x="11"
          y="11"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            className="dark:fill-dark fill-white"
            d="M77 11H11v66h66z"
          ></path>
        </mask>
        <g mask="url(#mask0_432_19)">
          <path
            className="fill-black dark:fill-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M44 74.422c16.801 0 30.422-13.62 30.422-30.422 0-16.801-13.62-30.422-30.422-30.422-16.801 0-30.422 13.62-30.422 30.422 0 16.801 13.62 30.422 30.422 30.422"
          ></path>
          <path
            className="fill-black dark:fill-white"
            d="M54.849 56.375v-24.75Z"
          ></path>
          <path
            stroke="url(#paint0_linear_432_19)"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
            d="M54.849 56.375v-24.75"
          ></path>
          <path
            fill="url(#paint1_linear_432_19)"
            fillRule="evenodd"
            d="m35.73 31.629-5.157-.004v24.75h5.156V39.743l26.262 31.926a33 33 0 0 0 4.09-3.145z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_432_19"
          x1="-nan"
          x2="-nan"
          y1="-nan"
          y2="-nan"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="[stop-color:#fff] dark:[stop-color:#000]"></stop>
          <stop
            offset="0.609"
            className="[stop-color:#fff] dark:[stop-color:#000]"
            stopOpacity="0.57"
          ></stop>
          <stop
            offset="0.797"
            className="[stop-color:#fff] dark:[stop-color:#000]"
            stopOpacity="0"
          ></stop>
          <stop
            offset="1"
            className="[stop-color:#fff] dark:[stop-color:#000]"
            stopOpacity="0"
          ></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_432_19"
          x1="51.992"
          x2="66.924"
          y1="48.383"
          y2="66.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="[stop-color:#fff] dark:[stop-color:#000]"></stop>
          <stop
            offset="1"
            className="[stop-color:#fff] dark:[stop-color:#000]"
            stopOpacity="0"
          ></stop>
        </linearGradient>
        <clipPath id="clip0_432_19">
          <path
            className="dark:fill-dark fill-white"
            d="M11 11h66v66H11z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default NextJSLogo;
