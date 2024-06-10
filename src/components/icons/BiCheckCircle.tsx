import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiCheckCircle = (
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
      d="M9 1.5C4.864 1.5 1.5 4.864 1.5 9s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5S13.136 1.5 9 1.5ZM9 15c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6Z"
      fill="#00BC82"
    />
    <path
      d="M7.5 10.19 5.774 8.47l-1.06 1.062 2.786 2.779 5.03-5.03-1.061-1.06-3.97 3.97Z"
      fill="#00BC82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiCheckCircle);
export default ForwardRef;
