import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgShoppingBag2 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M15 5 7.5 15v35a5 5 0 0 0 5 5h35a5 5 0 0 0 5-5V15L45 5H15Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 15h45M40 25a10 10 0 0 1-20 0"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgShoppingBag2);
export default ForwardRef;
