import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRedBin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M16.25 2.167h-6.5a2.169 2.169 0 0 0-2.167 2.166V6.5H3.25v2.167h2.167v13c0 1.195.971 2.166 2.166 2.166h10.834a2.169 2.169 0 0 0 2.166-2.166v-13h2.167V6.5h-4.333V4.333a2.169 2.169 0 0 0-2.167-2.166Zm-6.5 2.166h6.5V6.5h-6.5V4.333Zm8.667 17.334H7.583v-13h10.834v13Z"
      fill="#EF6355"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRedBin);
export default ForwardRef;
