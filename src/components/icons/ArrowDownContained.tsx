import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDownContained = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={10}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path d="M4.999 5.333 9.665 0H.332l4.667 5.333Z" fill="#8181A5" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDownContained);
export default ForwardRef;
