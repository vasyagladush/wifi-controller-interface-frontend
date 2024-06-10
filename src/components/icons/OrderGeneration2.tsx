import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgOrderGeneration2 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M16.366 5.573a.75.75 0 0 0-.616-.323H5.5l-.866-2.078A1.495 1.495 0 0 0 3.25 2.25H1.5v1.5h1.75l3.558 8.539a.75.75 0 0 0 .692.461h6a.752.752 0 0 0 .703-.486l2.25-6a.75.75 0 0 0-.087-.69ZM12.98 11.25H8l-1.875-4.5h8.543l-1.688 4.5ZM7.875 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM13.125 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgOrderGeneration2);
export default ForwardRef;
