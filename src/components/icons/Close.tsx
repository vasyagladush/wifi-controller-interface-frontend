import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <circle cx={9} cy={9} r={9} fill="#8181A5" />
    <path
      d="M11.446 5.7 8.971 8.176 6.497 5.701l-.825.825L8.146 9l-2.474 2.475.825.824L8.97 9.825l2.475 2.474.825-.824L9.797 9l2.474-2.474-.825-.825Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClose);
export default ForwardRef;
