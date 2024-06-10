import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRedCross = (
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
      d="m12 4-8 8M4 4l8 8"
      stroke="#EF6355"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRedCross);
export default ForwardRef;
