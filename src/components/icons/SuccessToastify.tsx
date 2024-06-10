import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSuccessToastify = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M9.166 14.287 6.148 11.27l-1.296 1.296 4.314 4.315 8.898-8.899-1.296-1.296-7.602 7.602Z"
      fill="#00BC82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSuccessToastify);
export default ForwardRef;
