import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgYellowDollar = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={65}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <g clipPath="url(#yellowDollar_svg__a)">
      <path
        d="M32.5 65C50.45 65 65 50.45 65 32.5S50.45 0 32.5 0 0 14.55 0 32.5 14.55 65 32.5 65Z"
        fill="#FFCE00"
        fillOpacity={0.17}
      />
      <path
        d="M32 18.25v27.5M38.25 23.25h-9.375a4.375 4.375 0 1 0 0 8.75h6.25a4.375 4.375 0 1 1 0 8.75H24.5"
        stroke="#FFCE00"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="yellowDollar_svg__a">
        <path fill="#fff" d="M0 0h65v65H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgYellowDollar);
export default ForwardRef;
