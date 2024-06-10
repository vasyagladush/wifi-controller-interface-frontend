import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSellers = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M15.75 3.75c0-.827-.673-1.5-1.5-1.5H3.75c-.827 0-1.5.673-1.5 1.5v10.5c0 .827.673 1.5 1.5 1.5h10.5c.827 0 1.5-.673 1.5-1.5V3.75Zm-12 10.5V3.75h10.5l.002 10.5H3.75Z"
      fill="currentColor"
    />
    <path
      d="M5.25 5.25h1.498v1.5H5.25v-1.5Zm3 0h4.5v1.5h-4.5v-1.5Zm-3 3h1.498v1.5H5.25v-1.5Zm3 0h4.5v1.5h-4.5v-1.5Zm-3 3h1.498v1.5H5.25v-1.5Zm3 0h4.5v1.5h-4.5v-1.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSellers);
export default ForwardRef;
