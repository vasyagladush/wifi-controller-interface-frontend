import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgClockGrey = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM.665 8a7.333 7.333 0 1 1 14.667 0A7.333 7.333 0 0 1 .666 8Z"
      fill="#8181A5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3.333c.369 0 .667.299.667.667v3.588l2.299 1.149a.667.667 0 1 1-.597 1.193L7.703 8.596A.667.667 0 0 1 7.334 8V4c0-.368.298-.667.667-.667Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClockGrey);
export default ForwardRef;
