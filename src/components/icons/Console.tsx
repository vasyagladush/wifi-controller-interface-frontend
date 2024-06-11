import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgConsole = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={18}
    height={18}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    ref={ref}
  >
    <g fill="currentColor">
      <path d="M3.924 5.02a.75.75 0 0 1 1.056-.096l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152L6.328 8 4.02 6.076a.75.75 0 0 1-.096-1.056zM8.25 10.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3z" />
      <path
        fillRule="evenodd"
        d="M0 3.25A2.25 2.25 0 0 1 2.25 1h11.5A2.25 2.25 0 0 1 16 3.25v9.5A2.25 2.25 0 0 1 13.75 15H2.25A2.25 2.25 0 0 1 0 12.75v-9.5zm2.25-.75a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75H2.25z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgConsole);
export default ForwardRef;
