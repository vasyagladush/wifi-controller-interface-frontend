import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCrossGrey = (
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
      d="M13.493 5.287 9.957 8.822 6.422 5.287 5.244 6.465 8.78 10l-3.535 3.535 1.178 1.179 3.535-3.535 3.536 3.535 1.179-1.179L11.137 10l3.535-3.535-1.179-1.178Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCrossGrey);
export default ForwardRef;
