import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path d="M12 9h1.5v3H12V9Z" fill="currentColor" />
    <path
      d="M15 5.25v-1.5c0-.827-.673-1.5-1.5-1.5H3.75C2.51 2.25 1.5 3.26 1.5 4.5v9c0 1.65 1.345 2.25 2.25 2.25H15c.827 0 1.5-.673 1.5-1.5v-7.5c0-.827-.673-1.5-1.5-1.5ZM3.75 3.75h9.75v1.5H3.75a.75.75 0 0 1 0-1.5ZM15 14.25H3.759C3.413 14.241 3 14.104 3 13.5V6.611c.236.085.485.139.75.139H15v7.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;
