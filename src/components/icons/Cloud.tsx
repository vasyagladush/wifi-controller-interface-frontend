import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path d="M16.25 23.75v-5H20l-5-6.25-5 6.25h3.75v5h2.5Z" fill="#8181A5" />
    <path
      d="M8.75 23.75h2.5v-2.5h-2.5A3.755 3.755 0 0 1 5 17.5c0-1.755 1.499-3.445 3.341-3.769l.727-.127.24-.698c.878-2.564 3.06-4.156 5.692-4.156A6.257 6.257 0 0 1 21.25 15v1.25h1.25c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5h-3.75v2.5h3.75c2.758 0 5-2.242 5-5a5.013 5.013 0 0 0-3.82-4.86c-.546-4.303-4.23-7.64-8.68-7.64-3.445 0-6.438 2.014-7.804 5.188C4.511 12.24 2.5 14.774 2.5 17.5a6.257 6.257 0 0 0 6.25 6.25Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCloud);
export default ForwardRef;
