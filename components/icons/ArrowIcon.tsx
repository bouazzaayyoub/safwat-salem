import React from "react";

type Props = {
  scale?: number;
  direction?: "left" | "top" | "bottom" | "right";
  color?: string;
};

export default function ArrowIcon({
  scale = 1,
  direction = "left",
  color = "#4b515f",
}: Props) {
  const rotationValue = {
    left: 180,
    right: 0,
    top: -90,
    bottom: 90,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10.737"
      height="15.816"
      viewBox="0 0 10.737 15.816"
      transform={`scale(${scale}) rotate(${rotationValue[direction]})`}
    >
      <path
        id="Tracé_12823"
        data-name="Tracé 12823"
        d="M1321.107,1606l5.08,5.08-5.08,5.08"
        transform="translate(-1318.279 -1603.172)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}
