import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M23.64 8.05a1.083 1.083 0 0 0-.89-.467H7.944l-1.25-3a2.16 2.16 0 0 0-2-1.333H2.167v2.167h2.527l5.14 12.333a1.083 1.083 0 0 0 1 .667H19.5c.452 0 .856-.28 1.015-.702l3.25-8.667a1.084 1.084 0 0 0-.125-.998Zm-4.89 8.2h-7.194l-2.709-6.5h12.34l-2.438 6.5ZM11.375 22.75a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25ZM18.959 22.75a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25Z"
      fill="#2a3b89"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBasket);
export default ForwardRef;
