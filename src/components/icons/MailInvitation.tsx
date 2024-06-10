import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMailInvitation = (
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
      d="M13.333 2.668H4c-.735 0-1.333.598-1.333 1.333v3.334H4v-2l4.267 3.2a.667.667 0 0 0 .8 0l4.266-3.2v6H8v1.333h5.333c.736 0 1.334-.598 1.334-1.333V4c0-.735-.598-1.333-1.334-1.333Zm-4.666 4.5L4.444 4.001h8.445L8.667 7.168Z"
      fill="currentColor"
    />
    <path
      d="M1.333 8H6v1.333H1.333V8Zm1.334 2h4v1.333h-4V10Zm2 2h2.666v1.333H4.667V12Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMailInvitation);
export default ForwardRef;
