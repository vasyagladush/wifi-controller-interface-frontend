import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgChevronDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707-1.414-1.414Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgChevronDown);
export default ForwardRef;
