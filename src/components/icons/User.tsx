import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M8 1.334a3.333 3.333 0 1 0 0 6.667 3.333 3.333 0 0 0 0-6.667Zm0 5.333a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 7.334v-.667a4.667 4.667 0 0 0-4.667-4.667H6.667A4.667 4.667 0 0 0 2 13.334v.667h1.333v-.667a3.333 3.333 0 0 1 3.334-3.333h2.666a3.333 3.333 0 0 1 3.334 3.333v.667H14Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;
