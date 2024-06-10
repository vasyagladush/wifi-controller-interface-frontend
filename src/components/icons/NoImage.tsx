import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgNoImage = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <rect
      x={0.5}
      y={0.5}
      width={55}
      height={55}
      rx={4.5}
      fill="#F4F5F9"
      stroke="#ADB5BD"
      strokeDasharray="3 3"
    />
    <path
      d="M20.417 21.365H32.74V28h1.896v-6.635c0-1.046-.85-1.896-1.896-1.896H20.417c-1.046 0-1.896.85-1.896 1.896V32.74c0 1.045.85 1.895 1.896 1.895H28V32.74h-7.583V21.365Z"
      fill="#8181A5"
    />
    <path
      d="m24.209 27.052-2.844 3.792h10.427L28 25.156l-2.844 3.792-.947-1.896ZM34.636 29.896H32.74v2.844h-2.844v1.895h2.844v2.844h1.896v-2.844h2.843V32.74h-2.843v-2.844Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNoImage);
export default ForwardRef;
