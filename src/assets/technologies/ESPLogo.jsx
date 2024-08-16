import React from "react";

function ESPLogo({ width, height, fill = "#EDF2F4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 89 88"
    >
      <rect width="88" height="88" x="0.5" fill={fill} rx="44"></rect>
      <g fill="#E7352C" clipPath="url(#clip0_78_42)">
        <path d="M35.01 57.654a3.94 3.94 0 11-7.88 0 3.94 3.94 0 017.88 0zM69.371 53.555a40.828 40.828 0 00-34.6-34.6 25.9 25.9 0 00-5.723 4.125v3.806A32.418 32.418 0 0161.44 59.25h3.806a27.283 27.283 0 004.125-5.696z"></path>
        <path d="M72.459 41.605A25.603 25.603 0 0046.72 16c-.905 0-1.783 0-2.662.133l-.585 1.704a44.05 44.05 0 0126.988 26.961l1.704-.612c0-.852.16-1.703.16-2.661M47.014 71.893a30.449 30.449 0 01-30.449-30.315 30.233 30.233 0 018.916-21.532l1.73 1.623a28.106 28.106 0 000 39.924 28.106 28.106 0 0039.924 0l1.624 1.623a30.21 30.21 0 01-21.745 8.677z"></path>
        <path d="M46.668 61.007a17.699 17.699 0 00-6.947-15.73 17.327 17.327 0 00-8.916-3.62 1.624 1.624 0 01-1.411-1.703 1.57 1.57 0 011.73-1.437 20.893 20.893 0 0118.631 22.836 18.232 18.232 0 01-.692 3.593l4.631 1.305a25.706 25.706 0 003.993-1.518c.344-1.798.514-3.625.506-5.456A29.277 29.277 0 0033.36 30.372a12.883 12.883 0 00-4.658 0c-1.95.515-3.7 1.6-5.03 3.114a9.953 9.953 0 004.444 15.97c.825.197 1.66.348 2.502.452a9.342 9.342 0 017.772 9.21 9.237 9.237 0 01-1.49 5.03l3.194 2.05c1.565.429 3.17.696 4.79.798a17.515 17.515 0 001.757-6.122"></path>
      </g>
      <defs>
        <clipPath id="clip0_78_42">
          <path
            fill="#fff"
            d="M0 0H56V56H0z"
            transform="translate(16.5 16)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ESPLogo;
