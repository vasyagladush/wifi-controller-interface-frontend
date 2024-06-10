import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgWarningToastify = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M10.085 9.167h1.833v4.583h-1.833V9.167Zm-.001 5.5h1.833V16.5h-1.833v-1.833Z"
      fill="#F9A000"
    />
    <path
      d="M12.62 3.85c-.318-.6-.94-.973-1.62-.973a1.83 1.83 0 0 0-1.62.974L2.652 16.559a1.82 1.82 0 0 0 .05 1.804 1.818 1.818 0 0 0 1.57.887h13.454a1.82 1.82 0 0 0 1.572-.887 1.825 1.825 0 0 0 .049-1.804L12.621 3.85ZM4.272 17.417 11 4.709l6.732 12.708H4.272Z"
      fill="#F9A000"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWarningToastify);
export default ForwardRef;
