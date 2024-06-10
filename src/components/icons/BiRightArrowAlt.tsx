import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiRightArrowAlt = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586l-4.293 4.293Z"
      fill="#000"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiRightArrowAlt);
export default ForwardRef;
