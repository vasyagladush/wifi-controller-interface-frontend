import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgLastPageIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M7.707 17.707 13.414 12 7.707 6.293 6.293 7.707 10.586 12l-4.293 4.293 1.414 1.414ZM15 6h2v12h-2V6Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLastPageIcon);
export default ForwardRef;
