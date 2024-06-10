import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgGreenBag = (
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
    <circle cx={32.5} cy={32.5} r={32.5} fill="#3B892A" fillOpacity={0.17} />
    <path
      d="m24.5 19.5-3.75 5V42a2.5 2.5 0 0 0 2.5 2.5h17.5a2.5 2.5 0 0 0 2.5-2.5V24.5l-3.75-5h-15ZM20.75 24.5h22.5"
      stroke="#3B892A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37 29.5a5 5 0 1 1-10 0"
      stroke="#3B892A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGreenBag);
export default ForwardRef;
