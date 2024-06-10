import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTruckStatusIcon = (
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
      d="M13.333 2.5H.833v10.833h12.5V2.5ZM13.333 6.666h3.333l2.5 2.5v4.167h-5.833V6.666ZM4.583 17.5a2.083 2.083 0 1 0 0-4.166 2.083 2.083 0 0 0 0 4.167ZM15.416 17.5a2.083 2.083 0 1 0 0-4.166 2.083 2.083 0 0 0 0 4.167Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTruckStatusIcon);
export default ForwardRef;
