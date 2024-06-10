import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuItemShoppingBag = (
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
      d="M3.75 16.5h10.5c.827 0 1.5-.673 1.5-1.5V6.75A.75.75 0 0 0 15 6h-2.25v-.75A3.754 3.754 0 0 0 9 1.5a3.754 3.754 0 0 0-3.75 3.75V6H3a.75.75 0 0 0-.75.75V15c0 .827.673 1.5 1.5 1.5Zm3-11.25C6.75 4.01 7.76 3 9 3s2.25 1.01 2.25 2.25V6h-4.5v-.75Zm-3 2.25h1.5V9h1.5V7.5h4.5V9h1.5V7.5h1.5l.002 7.5H3.75V7.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuItemShoppingBag);
export default ForwardRef;
