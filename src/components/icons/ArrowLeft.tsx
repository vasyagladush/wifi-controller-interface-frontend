import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={15}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M14.75 5.249H3.81l3.97-3.97L6.72.22.94 5.999l5.78 5.78 1.06-1.06-3.97-3.97h10.94v-1.5Z"
      fill="#556CB1"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
