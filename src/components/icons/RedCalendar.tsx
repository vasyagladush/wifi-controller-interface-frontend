import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRedCalendar = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={65}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M32.5 65C50.45 65 65 50.45 65 32.5S50.45 0 32.5 0 0 14.55 0 32.5 14.55 65 32.5 65Z"
      fill="#EF6355"
      fillOpacity={0.17}
    />
    <path
      d="M41.75 22h-17.5a2.5 2.5 0 0 0-2.5 2.5V42a2.5 2.5 0 0 0 2.5 2.5h17.5a2.5 2.5 0 0 0 2.5-2.5V24.5a2.5 2.5 0 0 0-2.5-2.5ZM38 19.5v5M28 19.5v5M21.75 29.5h22.5"
      stroke="#EF6355"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRedCalendar);
export default ForwardRef;
