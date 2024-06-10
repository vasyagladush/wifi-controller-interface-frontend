import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDownGrey = (
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
      d="m.287 1.138 3.805 3.805 3.804-3.805-.942-.943-2.862 2.862L1.23.195l-.943.943Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDownGrey);
export default ForwardRef;
