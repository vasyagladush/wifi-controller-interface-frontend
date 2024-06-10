import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRightGreen = (
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
      d="M8.03 4.72 6.97 5.782l3.22 3.22-3.22 3.22 1.06 1.06 4.28-4.28-4.28-4.28Z"
      fill="#00BC82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRightGreen);
export default ForwardRef;
