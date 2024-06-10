import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m14.774 13.689-2.954-2.954a6.629 6.629 0 0 0 1.431-4.108A6.632 6.632 0 0 0 6.627 0 6.633 6.633 0 0 0 0 6.627a6.633 6.633 0 0 0 6.627 6.627 6.623 6.623 0 0 0 4.108-1.431l2.954 2.954a.762.762 0 0 0 .544.226c.206 0 .398-.08.544-.226a.762.762 0 0 0-.003-1.088Zm-3.057-7.062a5.095 5.095 0 0 1-5.09 5.09 5.095 5.095 0 0 1-5.09-5.09 5.095 5.095 0 0 1 5.09-5.09 5.093 5.093 0 0 1 5.09 5.09Z"
      fill="current"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
