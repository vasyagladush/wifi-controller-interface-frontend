import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgShoppingBag = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m10 3.334-5 6.667v23.333a3.333 3.333 0 0 0 3.333 3.333h23.334A3.333 3.333 0 0 0 35 33.334V10.001l-5-6.667H10ZM5 10h30"
      stroke="#8181A5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.667 16.666a6.667 6.667 0 1 1-13.334 0"
      stroke="#8181A5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgShoppingBag);
export default ForwardRef;
