import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCloudUpload = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path d="M16.75 24.25v-5h3.75l-5-6.25-5 6.25h3.75v5h2.5Z" fill="#8181A5" />
    <path
      d="M9.25 24.25h2.5v-2.5h-2.5A3.755 3.755 0 0 1 5.5 18c0-1.755 1.499-3.445 3.341-3.769l.727-.127.24-.698c.878-2.564 3.06-4.156 5.692-4.156a6.257 6.257 0 0 1 6.25 6.25v1.25H23c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5h-3.75v2.5H23c2.758 0 5-2.242 5-5a5.013 5.013 0 0 0-3.82-4.86c-.546-4.303-4.23-7.64-8.68-7.64-3.445 0-6.438 2.014-7.804 5.188C5.011 12.74 3 15.274 3 18a6.257 6.257 0 0 0 6.25 6.25Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCloudUpload);
export default ForwardRef;
