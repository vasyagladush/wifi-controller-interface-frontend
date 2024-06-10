import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTripIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M11.133 15H4.875A1.877 1.877 0 0 1 3 13.125c0-1.034.84-1.875 1.875-1.875h5.25a2.628 2.628 0 0 0 2.625-2.625A2.628 2.628 0 0 0 10.125 6H6.479a7.36 7.36 0 0 1-1.015 1.5h4.661c.62 0 1.125.505 1.125 1.125s-.505 1.125-1.125 1.125h-5.25A3.38 3.38 0 0 0 1.5 13.125 3.38 3.38 0 0 0 4.875 16.5h7.195a7.815 7.815 0 0 1-.937-1.5ZM3.75 1.5C2.51 1.5 1.5 2.51 1.5 3.75c0 2.391 2.25 3.75 2.25 3.75S6 6.14 6 3.75C6 2.51 4.99 1.5 3.75 1.5Zm0 3.375a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Z"
      fill="currentColor"
    />
    <path
      d="M14.25 10.5c-1.24 0-2.25 1.01-2.25 2.25 0 2.391 2.25 3.75 2.25 3.75s2.25-1.36 2.25-3.75c0-1.24-1.01-2.25-2.25-2.25Zm0 3.375a1.124 1.124 0 1 1 0-2.248 1.124 1.124 0 0 1 0 2.248Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTripIcon);
export default ForwardRef;
