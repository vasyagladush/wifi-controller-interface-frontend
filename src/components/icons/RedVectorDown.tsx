import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRedVectorDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={14}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M8.333 2.39 5.667 5.058 1.47.862l-.942.943 5.138 5.138 2.666-2.667 2.862 2.862-1.528 1.529h4v-4l-1.529 1.528-3.805-3.804Z"
      fill="#EF6355"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRedVectorDown);
export default ForwardRef;
