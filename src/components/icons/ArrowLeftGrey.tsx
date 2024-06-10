import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeftGrey = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={5}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M4.029 0c.185 0 .324.047.463.185a.71.71 0 0 1 .046.967L1.62 4.236 4.77 7.137c.278.276.324.69.047.967-.278.276-.695.322-.973.046L.233 4.789C.092 4.65 0 4.513 0 4.329c0-.185.046-.369.185-.507L3.566.231c.092-.184.277-.23.463-.23Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeftGrey);
export default ForwardRef;
