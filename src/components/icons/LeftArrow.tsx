import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgLeftArrow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M12.185 5.769 6.955 11l5.23 5.231 1.297-1.296L9.546 11l3.936-3.935-1.296-1.296Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLeftArrow);
export default ForwardRef;
