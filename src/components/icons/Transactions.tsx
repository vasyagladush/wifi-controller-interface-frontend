import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTransactions = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M11.25 9 15 6l-3.75-3v2.25H1.5v1.5h9.75V9Zm5.25 2.25H6.75V9L3 12l3.75 3v-2.25h9.75v-1.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTransactions);
export default ForwardRef;
