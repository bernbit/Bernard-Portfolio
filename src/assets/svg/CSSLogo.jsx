import React from "react";

function CSSLogo({ width, height, circle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 89 88"
    >
      {circle}

      <g clipPath="url(#clip0_78_91)">
        <path
          fill="#2196F3"
          d="M23.063 19.5l3.904 44.1L44.5 68.5l17.527-4.897 3.91-44.103H23.063z"
        ></path>
        <path
          fill="#FAFAFA"
          d="M57.59 33.921l-.494 5.54-1.488 16.608L44.5 59.141l-.01.003-11.1-3.075-.776-8.685h5.44l.404 4.505 6.036 1.63.003-.004 6.045-1.63.824-7.505-19.012.052-.539-5.133 20.007-.236.405-5.494-20.948.058-.352-5.111h27.146l-.484 5.405z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_78_91">
          <path
            fill="#fff"
            d="M0 0H49V49H0z"
            transform="translate(20 19.5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CSSLogo;
