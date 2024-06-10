import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgNoImageCover = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M7.498 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10.498 14l-1.5-2-3 4h12l-4.5-6-3 4Z"
      fill="#8181A5"
    />
    <path
      d="M19.998 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2Zm-16 14V6h16L20 18H3.998Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNoImageCover);
export default ForwardRef;
