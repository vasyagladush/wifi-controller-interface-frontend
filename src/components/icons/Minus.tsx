import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={8}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path stroke="currentColor" strokeLinecap="square" d="M.767 1.033h6.466" />
  </svg>
);
const ForwardRef = forwardRef(SvgMinus);
export default ForwardRef;
