import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiCheckCircleWhite = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M14 2.332c-6.433 0-11.667 5.234-11.667 11.667S7.567 25.665 14 25.665 25.666 20.432 25.666 14c0-6.433-5.233-11.667-11.666-11.667Zm0 21c-5.146 0-9.334-4.187-9.334-9.333S8.854 4.665 14 4.665 23.333 8.853 23.333 14 19.146 23.332 14 23.332Z"
      fill="#fff"
    />
    <path
      d="m11.665 15.852-2.682-2.677-1.647 1.652 4.332 4.322 7.823-7.824-1.65-1.65-6.176 6.177Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiCheckCircleWhite);
export default ForwardRef;
