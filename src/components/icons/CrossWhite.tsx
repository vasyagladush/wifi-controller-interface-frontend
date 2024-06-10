import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCrossWhite = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={8}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M6.795.23 3.966 3.056 1.138.23l-.943.943L3.023 4 .195 6.828l.943.943 2.828-2.828L6.795 7.77l.942-.943L4.91 4l2.828-2.828-.942-.943Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCrossWhite);
export default ForwardRef;
