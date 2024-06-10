import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUpBlue = (
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
    <path
      d="m.285 3.862.943.943L4.09 1.943l2.862 2.862.942-.943L4.09.057.285 3.862Z"
      fill="#027AFF"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUpBlue);
export default ForwardRef;
