import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPackagedStatusIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M10.833 1.666H5a1.667 1.667 0 0 0-1.667 1.667v13.333A1.667 1.667 0 0 0 5 18.333h10a1.667 1.667 0 0 0 1.666-1.667V7.499l-5.833-5.833Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.833 1.666v5.833h5.833"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPackagedStatusIcon);
export default ForwardRef;
