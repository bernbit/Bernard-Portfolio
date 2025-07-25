import React from "react";

function ExpoLogo({ width, height, circle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 88 88"
    >
      {circle}
      <g clipPath="url(#clip0_432_18)">
        <path
          className="fill-black dark:fill-white"
          d="M20.875 19.5h46.25c1.035 0 1.875.823 1.875 1.837v45.325c0 1.015-.84 1.838-1.875 1.838h-46.25C19.84 68.5 19 67.677 19 66.662V21.337c0-1.014.84-1.837 1.875-1.837"
        ></path>
        <path
          className="fill-white dark:fill-black"
          d="M43.11 40.53c.28-.404.584-.454.83-.454.247 0 .658.05.937.454 3.621 4.876 11.135 17.75 11.83 18.45 1.029 1.038 2.442.391 3.261-.787.808-1.16 1.032-1.974 1.032-2.841 0-.592-11.701-21.935-12.88-23.71-1.133-1.71-1.502-2.142-3.442-2.142h-1.451c-1.935 0-2.214.432-3.348 2.141C38.701 33.417 27 54.761 27 55.352c0 .869.224 1.68 1.032 2.84.82 1.177 2.232 1.826 3.26.787.697-.7 8.198-13.573 11.819-18.45z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_432_18">
          <path
            className="fill-white dark:fill-black"
            d="M19 19.5h50v49H19z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ExpoLogo;
