import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiInfoCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M13 2.168c-5.973 0-10.833 4.86-10.833 10.833 0 5.974 4.86 10.834 10.833 10.834 5.974 0 10.834-4.86 10.834-10.834 0-5.973-4.86-10.833-10.834-10.833Zm0 19.5c-4.778 0-8.666-3.888-8.666-8.667 0-4.778 3.888-8.666 8.666-8.666 4.779 0 8.667 3.888 8.667 8.666 0 4.779-3.888 8.667-8.667 8.667Z"
      fill="currentColor"
    />
    <path
      d="M11.917 11.915h2.167v6.5h-2.167v-6.5Zm0-4.333h2.167v2.167h-2.167V7.582Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiInfoCircle);
export default ForwardRef;
