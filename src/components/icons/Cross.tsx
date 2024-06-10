import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m12 4-8 8M4 4l8 8"
      stroke="#495B6C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;
