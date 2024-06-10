import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEditPen = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={12}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M11.284 4.55c.283-.283.44-.66.44-1.06s-.157-.777-.44-1.06l-1.19-1.19A1.49 1.49 0 0 0 9.034.8c-.4 0-.777.157-1.06.44L0 9.189V12.5h3.31l7.974-7.95ZM9.034 2.3l1.19 1.19-1.193 1.188-1.189-1.19 1.192-1.187ZM1.5 11V9.811l5.28-5.263 1.19 1.19L2.69 11H1.5ZM0 14h12v1.5H0V14Z"
      fill="#027AFF"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEditPen);
export default ForwardRef;
