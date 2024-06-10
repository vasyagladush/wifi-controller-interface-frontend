import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M3.167 14.834a3.738 3.738 0 0 0 2.651 1.096 3.74 3.74 0 0 0 2.652-1.096l2.121-2.122-1.06-1.06-2.121 2.121a2.256 2.256 0 0 1-3.183 0 2.254 2.254 0 0 1 0-3.182L6.35 8.47l-1.06-1.06-2.122 2.12a3.755 3.755 0 0 0 0 5.304ZM14.834 8.47a3.756 3.756 0 0 0 0-5.303 3.755 3.755 0 0 0-5.303 0L7.41 5.289l1.06 1.06 2.121-2.122a2.255 2.255 0 0 1 3.182 0 2.254 2.254 0 0 1 0 3.183l-2.121 2.12 1.06 1.061 2.122-2.121Z"
      fill="#027AFF"
    />
    <path
      d="m6.348 12.712-1.06-1.06 6.364-6.365 1.06 1.061-6.364 6.364Z"
      fill="#027AFF"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
