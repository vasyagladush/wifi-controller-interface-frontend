import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCheckGreen = (
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
      d="M4.361 6.989 1.628 4.245.445 5.423l3.907 3.922 8.12-8.089L11.3.078l-6.938 6.91Z"
      fill="#00BC82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckGreen);
export default ForwardRef;
