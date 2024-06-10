import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSaveGreyIcon = (
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
      d="M3.333 14h9.334A1.334 1.334 0 0 0 14 12.667V5.333a.666.666 0 0 0-.193-.473L11.14 2.193A.667.667 0 0 0 10.667 2H3.333A1.333 1.333 0 0 0 2 3.333v9.334A1.333 1.333 0 0 0 3.333 14ZM10 12.667H6V9.333h4v3.334Zm-1.333-8H7.333V3.333h1.334v1.334ZM3.333 3.333h1.334V6H10V3.333h.393l2.274 2.274v7.06h-1.334V9.333A1.333 1.333 0 0 0 10 8H6a1.333 1.333 0 0 0-1.333 1.333v3.334H3.333V3.333Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSaveGreyIcon);
export default ForwardRef;
