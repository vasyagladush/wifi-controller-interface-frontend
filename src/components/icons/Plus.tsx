import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={9}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <g
      clipPath="url(#plus_svg__a)"
      stroke="currentColor"
      strokeLinecap="square"
    >
      <path d="M.767 4.033h6.466M3.967.767v6.466" />
    </g>
    <defs>
      <clipPath id="plus_svg__a">
        <path fill="#fff" d="M0 0h8v8H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
