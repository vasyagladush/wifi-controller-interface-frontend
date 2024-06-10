import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgDeliveredStatusIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <g
      clipPath="url(#delivered-status-icon_svg__a)"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.334 9.234V10a8.334 8.334 0 1 1-4.942-7.616" />
      <path d="M18.333 3.334 10 11.676l-2.5-2.5" />
    </g>
    <defs>
      <clipPath id="delivered-status-icon_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgDeliveredStatusIcon);
export default ForwardRef;
