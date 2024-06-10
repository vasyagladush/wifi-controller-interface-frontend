import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgGrayTruck = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={65}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M32.5 65C50.45 65 65 50.45 65 32.5S50.45 0 32.5 0 0 14.55 0 32.5 14.55 65 32.5 65Z"
      fill="#E5EBF0"
    />
    <path
      d="M38 20.75H19.25V37H38V20.75ZM38 27h5l3.75 3.75V37H38V27ZM24.875 43.25a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25ZM41.125 43.25a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
      stroke="#556CB1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGrayTruck);
export default ForwardRef;
