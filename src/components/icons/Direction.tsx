import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgDirection = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    ref={ref}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#FFD476"
        d="m23.492 33.603-20.554-2.17a1 1 0 0 1-.567-1.735L34.261.72a1 1 0 0 1 1.612 1.082L24.536 32.951a1 1 0 0 1-1.044.652Z"
      />
      <path
        fill="#FFC445"
        d="M24.316 33.288a1 1 0 0 1-.247-1.063L35.092 1.94a1 1 0 0 1 1.937.269l3.215 43.952a1 1 0 0 1-1.69.794L24.316 33.288Z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgDirection);
export default ForwardRef;
