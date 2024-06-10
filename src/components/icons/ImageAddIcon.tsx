import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgImageAddIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M6 7.5h19.5V18h3V7.5c0-1.654-1.346-3-3-3H6c-1.654 0-3 1.346-3 3v18c0 1.654 1.346 3 3 3h12v-3H6v-18Z"
      fill="currentColor"
    />
    <path d="m12 16.5-4.5 6H24l-6-9-4.5 6-1.5-3Z" fill="currentColor" />
    <path
      d="M28.5 21h-3v4.5H21v3h4.5V33h3v-4.5H33v-3h-4.5V21Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgImageAddIcon);
export default ForwardRef;
