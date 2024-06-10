import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M12.697 4.934c.252-.252.39-.587.39-.943s-.138-.69-.39-.942L11.64 1.99a1.324 1.324 0 0 0-.943-.39c-.356 0-.69.138-.942.39L2.667 9.057V12h2.942l7.088-7.066Zm-2-2 1.058 1.057-1.06 1.056L9.638 3.99l1.059-1.056ZM4 10.667V9.61l4.694-4.679L9.75 5.99l-4.693 4.678H4Zm-1.333 2.666h10.667v1.334H2.667v-1.334Z"
      fill="current"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
