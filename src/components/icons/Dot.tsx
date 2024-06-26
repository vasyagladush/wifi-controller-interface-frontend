import * as React from "react";
import { type SVGProps } from "react";
const SvgDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={5}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={2.5} cy={2.5} r={2.5} fill="currentColor" />
  </svg>
);
export default SvgDot;
