import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgImageIcon = (
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
      d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2ZM5 19V5h14l.002 14H5Z"
      fill="#000"
    />
    <path d="m10 14-1-1-3 4h12l-5-7-3 4Z" fill="#000" />
  </svg>
);
const ForwardRef = forwardRef(SvgImageIcon);
export default ForwardRef;
