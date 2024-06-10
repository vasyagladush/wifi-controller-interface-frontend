import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiXCircleWhite = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m10.7 18.949 3.3-3.3 3.3 3.3 1.649-1.65-3.3-3.3 3.3-3.299-1.65-1.65-3.3 3.3-3.299-3.3-1.65 1.65 3.3 3.3-3.3 3.3 1.65 1.649Z"
      fill="#fff"
    />
    <path
      d="M14 25.665c6.433 0 11.666-5.233 11.666-11.666 0-6.433-5.233-11.667-11.666-11.667-6.433 0-11.667 5.234-11.667 11.667S7.567 25.665 14 25.665Zm0-21c5.146 0 9.333 4.188 9.333 9.334S19.146 23.332 14 23.332s-9.334-4.187-9.334-9.333S8.854 4.665 14 4.665Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiXCircleWhite);
export default ForwardRef;
