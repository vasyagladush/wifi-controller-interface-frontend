import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgThreeDots = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={4}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <circle cx={1.905} cy={1.905} r={1.905} fill="#6C6C8A" />
    <circle cx={1.905} cy={8} r={1.905} fill="#6C6C8A" />
    <circle cx={1.905} cy={14.096} r={1.905} fill="#6C6C8A" />
  </svg>
);
const ForwardRef = forwardRef(SvgThreeDots);
export default ForwardRef;
