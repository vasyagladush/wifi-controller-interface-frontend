import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M12.333.333H5.666c-.735 0-1.333.598-1.333 1.334v2.666H1.666c-.735 0-1.333.598-1.333 1.334v6.666c0 .736.598 1.334 1.333 1.334h6.667c.735 0 1.333-.598 1.333-1.334V9.667h2.667c.735 0 1.333-.598 1.333-1.334V1.667c0-.736-.598-1.334-1.333-1.334Zm-10.667 12V5.667h6.667l.001 6.666H1.666Zm10.667-4H9.666V5.667c0-.736-.598-1.334-1.333-1.334H5.666V1.667h6.667v6.666Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCopy);
export default ForwardRef;
