import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgInfoToastify = (
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
      d="M11 1.833c-5.054 0-9.166 4.112-9.166 9.167s4.112 9.167 9.167 9.167c5.054 0 9.166-4.113 9.166-9.167 0-5.055-4.112-9.167-9.166-9.167Zm0 16.5c-4.043 0-7.333-3.29-7.333-7.333s3.29-7.333 7.334-7.333c4.043 0 7.333 3.29 7.333 7.333s-3.29 7.333-7.333 7.333Z"
      fill="#027AFF"
    />
    <path
      d="M10.084 10.083h1.833v5.5h-1.833v-5.5Zm0-3.666h1.833V8.25h-1.833V6.417Z"
      fill="#027AFF"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInfoToastify);
export default ForwardRef;
