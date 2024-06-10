import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M9.667 4.334h-4v-4H4.334v4h-4v1.333h4v4h1.333v-4h4V4.334Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiPlus);
export default ForwardRef;
