import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiPauseCircle = (
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
      d="M8 1.334a6.674 6.674 0 0 0-6.667 6.667A6.674 6.674 0 0 0 8 14.667a6.674 6.674 0 0 0 6.666-6.666A6.674 6.674 0 0 0 8 1.334Zm0 12a5.34 5.34 0 0 1-5.334-5.333A5.34 5.34 0 0 1 8 2.667a5.34 5.34 0 0 1 5.333 5.334A5.34 5.34 0 0 1 8 13.334Z"
      fill="#fff"
    />
    <path d="M8.667 6H10v4H8.667V6ZM6 6h1.333v4H6V6Z" fill="#fff" />
  </svg>
);
const ForwardRef = forwardRef(SvgBiPauseCircle);
export default ForwardRef;
