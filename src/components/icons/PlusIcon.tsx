import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPlusIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M13.167 7.332h-4v-4H7.833v4h-4v1.333h4v4h1.334v-4h4V7.332Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlusIcon);
export default ForwardRef;
