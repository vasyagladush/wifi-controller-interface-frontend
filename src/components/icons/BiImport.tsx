import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiImport = (
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
    <path d="m8 12 2.667-3.333h-2V1.333H7.334v7.334h-2L8 12Z" fill="#8181A5" />
    <path
      d="M12.667 6H10v1.333h2.667v6H3.333v-6H6V6H3.333C2.598 6 2 6.598 2 7.333v6c0 .736.598 1.334 1.333 1.334h9.334c.735 0 1.333-.598 1.333-1.334v-6C14 6.598 13.402 6 12.667 6Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiImport);
export default ForwardRef;
