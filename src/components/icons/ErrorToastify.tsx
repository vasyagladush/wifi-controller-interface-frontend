import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgErrorToastify = (
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
    <path
      d="M10.958 1.833c-5.031 0-9.124 4.113-9.124 9.167 0 5.055 4.112 9.167 9.167 9.167 5.054 0 9.166-4.113 9.166-9.167 0-5.054-4.131-9.167-9.21-9.167Zm.043 16.5c-4.044 0-7.334-3.29-7.334-7.333s3.27-7.333 7.29-7.333c4.069 0 7.377 3.29 7.377 7.333s-3.29 7.333-7.333 7.333Z"
      fill="#EF6355"
    />
    <path
      d="M10.084 6.417h1.833v6.416h-1.833V6.417Zm0 7.333h1.833v1.833h-1.833V13.75Z"
      fill="#EF6355"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgErrorToastify);
export default ForwardRef;
