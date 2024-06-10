import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCheckBlue = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={13}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M4.333 6.988 1.588 4.244.41 5.423l3.923 3.922 8.089-8.09L11.243.079l-6.91 6.91Z"
      fill="#027AFF"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckBlue);
export default ForwardRef;
