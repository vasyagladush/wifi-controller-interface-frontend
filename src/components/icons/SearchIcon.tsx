import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSearchIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m15.759 14.601-3.151-3.15a7.07 7.07 0 0 0 1.526-4.382c0-3.9-3.17-7.069-7.065-7.069C3.169 0 0 3.17 0 7.069s3.17 7.068 7.069 7.068c1.587 0 3.139-.54 4.381-1.526l3.152 3.15c.155.157.36.242.58.242.22 0 .424-.085.58-.241a.813.813 0 0 0-.003-1.16ZM12.498 7.07a5.435 5.435 0 0 1-5.43 5.429 5.435 5.435 0 0 1-5.428-5.43A5.435 5.435 0 0 1 7.069 1.64a5.433 5.433 0 0 1 5.429 5.429Z"
      fill="#6C6C8A"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearchIcon);
export default ForwardRef;
