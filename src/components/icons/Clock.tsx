import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M9 1.5C4.864 1.5 1.5 4.864 1.5 9s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5S13.136 1.5 9 1.5ZM9 15c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6Z"
      fill="currentColor"
    />
    <path
      d="M9.75 5.25h-1.5v4.06l2.47 2.47 1.06-1.06-2.03-2.03V5.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
