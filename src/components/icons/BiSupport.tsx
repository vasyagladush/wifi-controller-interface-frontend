import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBiSupport = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M11 1.832c-5.054 0-9.166 4.112-9.166 9.167v3.797c0 .94.822 1.703 1.833 1.703h.917a.917.917 0 0 0 .916-.917v-4.714a.917.917 0 0 0-.917-.917h-.832c.51-3.548 3.562-6.286 7.25-6.286 3.686 0 6.739 2.738 7.248 6.286h-.832a.917.917 0 0 0-.917.917v5.63a1.835 1.835 0 0 1-1.833 1.834h-1.833v-.917H9.167v2.75h5.5a3.67 3.67 0 0 0 3.667-3.666c1.01 0 1.833-.764 1.833-1.703V11c0-5.055-4.112-9.167-9.167-9.167Z"
      fill="#F9A000"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBiSupport);
export default ForwardRef;
