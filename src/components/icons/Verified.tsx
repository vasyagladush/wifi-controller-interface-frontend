import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgVerified = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <circle cx={8} cy={8} r={8} fill="#3B892A" />
    <g clipPath="url(#verified_svg__a)">
      <path
        d="m7.096 9.493 3.51-3.274a.86.86 0 0 1 1.156 0 .727.727 0 0 1 0 1.077l-4.09 3.81a.86.86 0 0 1-1.155 0L4.239 8.984a.72.72 0 0 1 0-1.078.86.86 0 0 1 1.155 0l1.702 1.588Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="verified_svg__a">
        <path fill="#fff" transform="translate(4 6)" d="M0 0h8v5.333H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgVerified);
export default ForwardRef;
