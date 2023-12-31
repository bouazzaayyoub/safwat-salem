import React from "react";

type Props = {
  scale?: number;
};

export default function QuranIcon({ scale = 1 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="147.287"
      height="100"
      viewBox="0 0 147.287 100"
      transform={`scale(${scale})`}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#0dbf9e" />
          <stop offset="1" stopColor="#28d6cb" />
        </linearGradient>
      </defs>
      <path
        id="noun-quran-4434368"
        d="M250.361,139.532a13.756,13.756,0,0,0-10.841-6.052l-3.684-5.736a13.1,13.1,0,0,0-16.894-3.421,180.842,180.842,0,0,0-33.1,20.1c-2.052,1.579-3.947,3.1-5.789,4.684a5.265,5.265,0,0,0-1.263-.316,8.263,8.263,0,0,0-1.105,0c-1.895-1.579-3.841-3.211-5.946-4.842a180.717,180.717,0,0,0-33.1-19.84,13.158,13.158,0,0,0-16.894,3.631l-3.631,5.263a11.214,11.214,0,0,0-2.631.316,13.156,13.156,0,0,0-4.316,23.892l43.681,28.419-20,12.631a13.156,13.156,0,0,0-3.947,18.156,13.091,13.091,0,0,0,18.157,3.947L179.107,201l29.314,18.893h0a12.9,12.9,0,0,0,7.1,2.105,13.08,13.08,0,0,0,2.843-.316,12.891,12.891,0,0,0,8.262-5.736,13.156,13.156,0,0,0-3.947-18.156l-19.209-12.157,42.944-27.682a13.156,13.156,0,0,0,3.947-18.156Zm-57.89,13.21A170.405,170.405,0,0,1,223.626,133.8c2.052-.947,3.474-.579,3.631-.316l2.526,3.79-45.732,29.313v-7.631a3.945,3.945,0,0,0,1.579-.894c2.052-1.737,4.263-3.527,6.631-5.316Zm-57.89-19.1a165.538,165.538,0,0,1,31.155,18.893c2.421,1.842,4.736,3.684,6.842,5.263a5.276,5.276,0,0,0,1.367.789v7.262L128.16,136.9l2.368-3.631a5.075,5.075,0,0,1,3.632.369Zm-17.314,14.736a2.844,2.844,0,0,1-1.632-1.632,2.735,2.735,0,0,1,.369-2,2.847,2.847,0,0,1,1.683-1.21h.842a5.75,5.75,0,0,0,1.21.473l49.68,32-4.842,3.1Zm99.781,58.311a2.632,2.632,0,0,1,.789,3.631,2.8,2.8,0,0,1-1.685,1.158,2.423,2.423,0,0,1-1.948-.369l-25.314-16.314,4.842-3.1Zm24.892-59.523a2.787,2.787,0,0,1-1.158,1.685l-97.411,62.681a2.687,2.687,0,0,1-1.948.421,2.791,2.791,0,0,1-1.685-1.158,2.632,2.632,0,0,1,.789-3.631l97.36-62.681a2.7,2.7,0,0,1,1.421-.421h.579a2.845,2.845,0,0,1,1.632,1.158,2.684,2.684,0,0,1,.421,1.947Z"
        transform="translate(-105.157 -122.473)"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
}