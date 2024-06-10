import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgGreenVectorUp = (
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
      d="m5.667 3.943 2.666 2.666 3.805-3.804 1.529 1.528v-4h-4l1.528 1.529-2.862 2.862-2.666-2.667L.529 7.195l.942.943 4.196-4.195Z"
      fill="#00BC82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGreenVectorUp);
export default ForwardRef;
