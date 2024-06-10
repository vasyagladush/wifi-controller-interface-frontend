import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgFailure = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={66}
    height={66}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <circle cx={33} cy={33} r={33} fill="#EF6355" fillOpacity={0.12} />
    <path
      d="M55 33c0 12.15-9.85 22-22 22s-22-9.85-22-22 9.85-22 22-22 22 9.85 22 22Z"
      fill="#EF6355"
    />
    <path
      d="M30.172 37.242 33 34.414l2.828 2.828 1.414-1.414L34.414 33l2.828-2.828-1.414-1.414L33 31.586l-2.828-2.828-1.414 1.414L31.586 33l-2.828 2.828 1.414 1.414Z"
      fill="#fff"
    />
    <path
      d="M33 43c5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10 4.486 10 10 10Zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFailure);
export default ForwardRef;
