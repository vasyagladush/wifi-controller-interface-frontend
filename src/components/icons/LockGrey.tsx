import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgLockGrey = (
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
      d="M8 1.333a3.337 3.337 0 0 0-3.333 3.334v2H4c-.736 0-1.333.598-1.333 1.333v5.334c0 .735.598 1.333 1.333 1.333h8c.735 0 1.333-.598 1.333-1.333V8c0-.735-.598-1.333-1.333-1.333h-.667v-2A3.337 3.337 0 0 0 8 1.334ZM12 8 12 13.334H4V8h8ZM6 6.667v-2c0-1.103.897-2 2-2 1.102 0 2 .897 2 2v2H6Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLockGrey);
export default ForwardRef;
