import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgStaff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M14.25 2.25h-1.688a.75.75 0 0 0-.75-.75H6.189a.75.75 0 0 0-.75.75H3.75c-.827 0-1.5.673-1.5 1.5V15c0 .827.673 1.5 1.5 1.5h10.5c.827 0 1.5-.673 1.5-1.5V3.75c0-.827-.673-1.5-1.5-1.5Zm0 12.75H3.75V3.75h1.5v1.5h7.5v-1.5h1.5V15Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgStaff);
export default ForwardRef;
