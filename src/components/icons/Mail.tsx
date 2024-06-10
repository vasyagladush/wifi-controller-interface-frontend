import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M13.334 2.667H2.667c-.735 0-1.333.598-1.333 1.333v8c0 .735.597 1.333 1.333 1.333h10.666c.736 0 1.334-.598 1.334-1.333V4c0-.736-.598-1.333-1.333-1.333Zm0 1.333v.34L8 8.49 2.667 4.34V4h10.666ZM2.667 12V6.03L7.59 9.86a.663.663 0 0 0 .818 0l4.925-3.83V12H2.668Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMail);
export default ForwardRef;
