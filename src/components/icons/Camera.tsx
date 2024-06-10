import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M17.25 14.25a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h3l1.5-2.25h4.5l1.5 2.25h3a1.5 1.5 0 0 1 1.5 1.5v8.25Z"
      stroke="current"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="current"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCamera);
export default ForwardRef;
