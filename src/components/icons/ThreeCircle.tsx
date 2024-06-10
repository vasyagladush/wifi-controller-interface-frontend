import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgThreeCircle = (
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
    <circle cx={11} cy={11} r={10.5} fill="#fff" stroke="#ADB5BD" />
    <path
      d="m11.108 10.722 2.379-2.938V6.9H7.481v1.131h4.381l-2.288 2.808v.91h.728c1.56 0 2.249.624 2.249 1.586 0 .988-.78 1.612-2.145 1.612-1.118 0-2.132-.403-2.743-.975l-.598 1.027c.767.689 2.041 1.105 3.341 1.105 2.314 0 3.445-1.248 3.445-2.782 0-1.404-.923-2.431-2.743-2.6Z"
      fill="#2a3b89"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgThreeCircle);
export default ForwardRef;
