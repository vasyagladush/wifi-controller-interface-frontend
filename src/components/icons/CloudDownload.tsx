import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCloudDownload = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M12.632 7.408a4.673 4.673 0 0 0-4.63-4.075c-1.837 0-3.433 1.074-4.161 2.767-1.432.428-2.505 1.78-2.505 3.234a3.337 3.337 0 0 0 3.333 3.333h.667v-1.333h-.667c-1.102 0-2-.898-2-2 0-.936.8-1.838 1.782-2.011l.388-.068.128-.372c.468-1.367 1.632-2.216 3.036-2.216A3.337 3.337 0 0 1 11.336 8v.667h.667c.735 0 1.333.598 1.333 1.333 0 .736-.598 1.334-1.333 1.334h-1.334v1.333h1.334A2.67 2.67 0 0 0 14.669 10a2.672 2.672 0 0 0-2.037-2.592Z"
      fill="currentColor"
    />
    <path
      d="M8.67 9.333V6.666H7.335v2.667h-2l2.667 3.333 2.666-3.333h-2Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCloudDownload);
export default ForwardRef;
