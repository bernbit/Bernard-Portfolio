import React from "react";

function Icon({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 409.294 409.294"
    >
      <path
        d="M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z"
        // data-original="#000000"
        // className="dark-fill-primary opacity-75 dark:fill-primary"
        className={`${color} border-2 border-dark-primary drop-shadow-lg`}
      ></path>
    </svg>
  );
}
export default Icon;
