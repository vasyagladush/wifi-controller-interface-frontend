import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArchive = (
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
      d="m14.47 3.528-1.999-2A.664.664 0 0 0 12 1.334H4a.664.664 0 0 0-.471.196l-2 2A.663.663 0 0 0 1.333 4v8.667c0 .735.598 1.333 1.334 1.333h10.666c.736 0 1.334-.598 1.334-1.333V4a.662.662 0 0 0-.196-.472ZM4.277 2.667h7.448l.667.667H3.609l.667-.667Zm-1.61 10v-8h10.667l.002 8H2.667Z"
      fill="currentColor"
    />
    <path d="M9.333 6H6.667v2h-2L8 11.333 11.333 8h-2V6Z" fill="currentColor" />
  </svg>
);
const ForwardRef = forwardRef(SvgArchive);
export default ForwardRef;
