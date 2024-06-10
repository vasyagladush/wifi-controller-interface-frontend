import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgServices = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M5.25 8.25h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm3-3h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm3-3h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Z"
      fill="currentColor"
    />
    <path
      d="M3.75 16.5h10.5c.827 0 1.5-.673 1.5-1.5V4.5c0-.827-.673-1.5-1.5-1.5h-1.5V1.5h-1.5V3h-4.5V1.5h-1.5V3h-1.5c-.827 0-1.5.673-1.5 1.5V15c0 .827.673 1.5 1.5 1.5ZM14.25 6v9H3.75V6h10.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgServices);
export default ForwardRef;
