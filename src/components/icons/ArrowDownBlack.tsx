import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDownBlack = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={8}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path d="M4 4.594.536.094h6.928L4 4.594Z" fill="currentColor" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDownBlack);
export default ForwardRef;
