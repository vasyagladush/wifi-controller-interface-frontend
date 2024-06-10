import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCreditCard = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M13.333 2.666H2.666c-.735 0-1.333.598-1.333 1.333v8c0 .736.598 1.334 1.333 1.334h10.667c.735 0 1.333-.598 1.333-1.334V4c0-.735-.598-1.333-1.333-1.333ZM2.666 11.999V4h10.667v8H2.667Z"
      fill="#fff"
    />
    <path
      d="M4.333 7.334h2a.333.333 0 0 0 .334-.333V5.667a.333.333 0 0 0-.334-.333h-2A.333.333 0 0 0 4 5.667v1.334a.333.333 0 0 0 .333.333Zm-.333 2h4v1.334H4V9.334Zm4.667 0H12v1.334H8.667V9.334Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCreditCard);
export default ForwardRef;
