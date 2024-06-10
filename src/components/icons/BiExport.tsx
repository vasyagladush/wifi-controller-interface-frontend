import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiExport = (
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
    <path
      d="M7.333 10.667h1.333v-6h2L8 1.333 5.333 4.667h2v6Z"
      fill="#8181A5"
    />
    <path
      d="M3.333 14.667h9.334c.735 0 1.333-.598 1.333-1.334v-6C14 6.598 13.402 6 12.667 6H10v1.333h2.667v6H3.333v-6H6V6H3.333C2.598 6 2 6.598 2 7.333v6c0 .736.598 1.334 1.333 1.334Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiExport);
export default ForwardRef;
