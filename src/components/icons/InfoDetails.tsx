import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgInfoDetails = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <circle cx={11} cy={11} r={10.5} fill="#fff" stroke="#DBE3EB" />
    <path
      d="M11 3.5c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5ZM11 17c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6Z"
      fill="#495B6C"
    />
    <path
      d="M10.25 10.25h1.5v4.5h-1.5v-4.5Zm0-3h1.5v1.5h-1.5v-1.5Z"
      fill="#495B6C"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInfoDetails);
export default ForwardRef;
