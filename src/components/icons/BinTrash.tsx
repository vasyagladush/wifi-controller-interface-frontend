import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBinTrash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M4.167 16.667a1.667 1.667 0 0 0 1.666 1.667h8.334a1.667 1.667 0 0 0 1.666-1.667v-10H17.5V5h-3.333V3.334A1.667 1.667 0 0 0 12.5 1.667h-5a1.667 1.667 0 0 0-1.667 1.667V5H2.5v1.667h1.667v10ZM7.5 3.334h5V5h-5V3.334Zm-.833 3.333h7.5v10H5.833v-10h.834Z"
      fill="#8181A5"
    />
    <path
      d="M7.5 8.333h1.667V15H7.5V8.333Zm3.333 0H12.5V15h-1.667V8.333Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBinTrash);
export default ForwardRef;
