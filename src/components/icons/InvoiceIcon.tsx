import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgInvoiceIcon = (
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
      d="M15 2.25H3c-.827 0-1.5.673-1.5 1.5v10.5c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5V3.75c0-.827-.673-1.5-1.5-1.5Zm-12 12V3.75h12l.002 10.5H3Z"
      fill="currentColor"
    />
    <path
      d="M4.5 5.25h9v1.5h-9v-1.5Zm0 3h9v1.5h-9v-1.5Zm0 3H9v1.5H4.5v-1.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInvoiceIcon);
export default ForwardRef;
