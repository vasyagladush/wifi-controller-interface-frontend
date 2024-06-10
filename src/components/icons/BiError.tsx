import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiError = (
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
      d="M10.084 9.168h1.834v4.583h-1.834V9.168Zm0 5.5h1.833v1.833h-1.833v-1.833Z"
      fill="#F9A000"
    />
    <path
      d="M12.62 3.849c-.318-.6-.94-.974-1.62-.974a1.83 1.83 0 0 0-1.62.974L2.652 16.557a1.82 1.82 0 0 0 .05 1.804 1.82 1.82 0 0 0 1.57.887h13.454a1.82 1.82 0 0 0 1.572-.887 1.825 1.825 0 0 0 .049-1.804L12.621 3.85ZM4.272 17.415 11 4.707l6.732 12.708H4.272Z"
      fill="#F9A000"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiError);
export default ForwardRef;
