import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCashOtherPayMethod = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={38}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <rect
      x={0.5}
      y={0.5}
      width={37}
      height={25}
      rx={4.5}
      fill="#fff"
      stroke="#DBE3EB"
    />
    <path
      d="M26.5 6.333h-15a.833.833 0 0 0-.834.834v11.666a.833.833 0 0 0 .833.834h15a.834.834 0 0 0 .834-.834V7.168a.833.833 0 0 0-.834-.833Zm-.834 9.167a2.5 2.5 0 0 0-2.5 2.5h-8.333a2.5 2.5 0 0 0-2.5-2.5v-5a2.5 2.5 0 0 0 2.5-2.5h8.333a2.5 2.5 0 0 0 2.5 2.5v5Z"
      fill="#00BC82"
    />
    <path
      d="M19 9.666A3.337 3.337 0 0 0 15.665 13a3.337 3.337 0 0 0 3.333 3.333A3.337 3.337 0 0 0 22.333 13a3.337 3.337 0 0 0-3.334-3.334Zm0 5c-.92 0-1.667-.747-1.667-1.666 0-.92.747-1.667 1.666-1.667.92 0 1.667.748 1.667 1.667s-.747 1.666-1.667 1.666Z"
      fill="#00BC82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCashOtherPayMethod);
export default ForwardRef;
