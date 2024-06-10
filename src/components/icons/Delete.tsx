import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M3.333 13.333a1.333 1.333 0 0 0 1.334 1.334h6.666a1.333 1.333 0 0 0 1.334-1.334v-8H14V4h-2.667V2.667A1.333 1.333 0 0 0 10 1.333H6a1.333 1.333 0 0 0-1.333 1.334V4H2v1.333h1.333v8ZM6 2.667h4V4H6V2.667Zm-.667 2.666h6v8H4.667v-8h.666Z"
      fill="current"
    />
    <path
      d="M6 6.667h1.333V12H6V6.667Zm2.667 0H10V12H8.667V6.667Z"
      fill="current"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDelete);
export default ForwardRef;
