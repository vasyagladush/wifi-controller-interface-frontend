import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M1.333 12h9.334A1.334 1.334 0 0 0 12 10.667V3.333a.666.666 0 0 0-.193-.473L9.14.193A.667.667 0 0 0 8.667 0H1.333A1.333 1.333 0 0 0 0 1.333v9.334A1.333 1.333 0 0 0 1.333 12ZM8 10.667H4V7.333h4v3.334Zm-1.333-8H5.333V1.333h1.334v1.334ZM1.333 1.333h1.334V4H8V1.333h.393l2.274 2.274v7.06H9.333V7.333A1.333 1.333 0 0 0 8 6H4a1.333 1.333 0 0 0-1.333 1.333v3.334H1.333V1.333Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSave);
export default ForwardRef;
