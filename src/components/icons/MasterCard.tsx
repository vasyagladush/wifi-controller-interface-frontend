import * as React from "react";
import { type SVGProps } from "react";
const SvgMasterCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={39}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.5}
      y={0.5}
      width={37.084}
      height={25}
      rx={4.5}
      fill="#fff"
      stroke="#DBE3EB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.815 20.373c4.028 0 7.294-3.348 7.294-7.478s-3.266-7.478-7.294-7.478a7.161 7.161 0 0 0-4.732 1.786 7.161 7.161 0 0 0-4.732-1.786c-4.029 0-7.294 3.348-7.294 7.478s3.265 7.478 7.294 7.478a7.161 7.161 0 0 0 4.732-1.786 7.161 7.161 0 0 0 4.732 1.786Z"
      fill="#ED0006"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.083 18.587a7.54 7.54 0 0 0 2.563-5.692 7.54 7.54 0 0 0-2.563-5.692 7.161 7.161 0 0 1 4.732-1.786c4.028 0 7.294 3.348 7.294 7.478s-3.266 7.478-7.294 7.478a7.162 7.162 0 0 1-4.732-1.786Z"
      fill="#F9A000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.083 18.586a7.54 7.54 0 0 0 2.563-5.691 7.54 7.54 0 0 0-2.563-5.692 7.54 7.54 0 0 0-2.563 5.692 7.54 7.54 0 0 0 2.563 5.691Z"
      fill="#FF5E00"
    />
  </svg>
);
export default SvgMasterCard;
