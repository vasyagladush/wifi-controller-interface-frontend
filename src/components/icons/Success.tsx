import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSuccess = (
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
    <circle cx={33} cy={33} r={33} fill="#3B892A" fillOpacity={0.12} />
    <path
      d="M55 33c0 12.15-9.85 22-22 22s-22-9.85-22-22 9.85-22 22-22 22 9.85 22 22Z"
      fill="#3B892A"
    />
    <path
      d="M33 23c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10Zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Z"
      fill="#fff"
    />
    <path
      d="m31 34.587-2.3-2.295-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414L31 34.587Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSuccess);
export default ForwardRef;
