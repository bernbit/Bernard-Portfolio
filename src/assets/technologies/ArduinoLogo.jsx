import React from "react";

function ArduinoIcon({ width = 88, height = 88, fill = "#EDF2F4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 88 88"
    >
      <rect width="88" height="88" fill={fill} rx="44"></rect>
      <path
        fill="#008184"
        fillRule="evenodd"
        d="M77.5 44c0-8.83-7.416-16-16.506-16-.837 0-1.697.047-2.534.187C51.393 29.19 46.65 34.307 44 38.23c-2.65-3.924-7.393-9.04-14.46-10.044A18.496 18.496 0 0027.006 28C17.893 28 10.5 35.17 10.5 44s7.416 16 16.506 16c.837 0 1.697-.047 2.557-.187 7.067-1.028 11.81-6.143 14.46-10.067 2.65 3.924 7.393 9.04 14.46 10.067.837.117 1.697.187 2.558.187C70.084 60 77.5 52.83 77.5 44zM28.726 54.207c-.581.094-1.162.117-1.743.117-5.998 0-10.857-4.648-10.857-10.324 0-5.7 4.882-10.324 10.88-10.324.581 0 1.162.047 1.743.117C35.422 34.75 39.49 41.36 40.885 44c-1.418 2.663-5.51 9.25-12.159 10.207zm30.525-20.414C52.578 34.75 48.487 41.36 47.115 44c1.372 2.64 5.463 9.25 12.136 10.207.58.07 1.162.117 1.743.117 5.975 0 10.857-4.625 10.857-10.324 0-5.676-4.86-10.324-10.857-10.324-.581 0-1.162.047-1.743.117zm-36.9 8.493h9.982v3.076H22.35v-3.076zm43.25 3.099h-3.367v3.233h-3.226v-3.233H55.64v-3.099h3.367v-3.233h3.226v3.233h3.367v3.099z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ArduinoIcon;
