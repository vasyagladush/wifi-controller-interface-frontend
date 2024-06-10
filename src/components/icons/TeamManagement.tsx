import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTeamManagement = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m13.671 3.665-1.5-3A.751.751 0 0 0 11.5.25H7.75a.75.75 0 0 0-.671.415L5.787 3.25H2.5a.75.75 0 0 0-.671.415l-1.5 3a.75.75 0 0 0 0 .671l1.5 3a.751.751 0 0 0 .671.414h3.287l1.293 2.585a.749.749 0 0 0 .67.415h3.75a.75.75 0 0 0 .671-.415l1.5-3a.75.75 0 0 0 0-.671L12.34 7l1.332-2.665a.749.749 0 0 0 0-.67ZM8.214 1.75h2.822L12.162 4l-1.126 2.25H8.215L7.089 4l1.125-2.25ZM1.839 7l1.125-2.25h2.823L6.912 7 5.787 9.25H2.964L1.839 7Zm9.197 5.25H8.215L7.089 10l1.125-2.25h2.822L12.162 10l-1.126 2.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTeamManagement);
export default ForwardRef;
