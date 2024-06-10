import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBlueBox = (
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
    <g clipPath="url(#blueBox_svg__a)">
      <path
        d="M32.5 65C50.45 65 65 50.45 65 32.5S50.45 0 32.5 0 0 14.55 0 32.5 14.55 65 32.5 65Z"
        fill="#38B6FF"
        fillOpacity={0.17}
      />
      <path
        d="m37.625 28.75-11.25-6.487M43.25 37V27A2.5 2.5 0 0 0 42 24.838l-8.75-5a2.5 2.5 0 0 0-2.5 0l-8.75 5A2.5 2.5 0 0 0 20.75 27v10A2.5 2.5 0 0 0 22 39.163l8.75 5a2.5 2.5 0 0 0 2.5 0l8.75-5A2.5 2.5 0 0 0 43.25 37Z"
        stroke="#38B6FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.088 25.7 32 32.013 42.913 25.7M32 44.6V32"
        stroke="#38B6FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="blueBox_svg__a">
        <path fill="#fff" d="M0 0h65v65H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgBlueBox);
export default ForwardRef;
