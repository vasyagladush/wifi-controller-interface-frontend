import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTickRound = (
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
    <circle cx={11} cy={11} r={10.5} fill="#fff" stroke="#00BC82" />
    <path
      d="M9.667 13.391 7.47 11.196l-.942.942 3.138 3.138 6.471-6.471-.943-.943-5.528 5.529Z"
      fill="#00BC82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTickRound);
export default ForwardRef;
