import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgStackalt = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    ref={ref}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#FFAE00"
        d="M23.863 0v48L3.323 36.25l-.001-24.3L23.862 0Zm.004 0 20.541 11.95-.001 24.3L23.867 48V0Z"
        opacity={0.196}
      />
      <path
        fill="#66BF3C"
        d="m8.99 28.72 7.969-4.637a14 14 0 0 1 14.082 0l7.969 4.637a4 4 0 0 1 .056 6.881l-7.828 4.728a14 14 0 0 1-14.476 0l-7.828-4.728a4 4 0 0 1 .056-6.881Z"
        opacity={0.5}
      />
      <path
        fill="#FFAE00"
        d="m8.99 20.826 7.969-4.637a14 14 0 0 1 14.082 0l7.969 4.637a4 4 0 0 1 .056 6.881l-7.828 4.728a14 14 0 0 1-14.476 0l-7.828-4.728a4 4 0 0 1 .056-6.881Z"
        opacity={0.5}
      />
      <path
        fill="#FC521F"
        d="m8.99 12.932 7.969-4.637a14 14 0 0 1 14.082 0l7.969 4.637a4 4 0 0 1 .056 6.881l-7.828 4.728a14 14 0 0 1-14.476 0l-7.828-4.728a4 4 0 0 1 .056-6.88Z"
        opacity={0.5}
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgStackalt);
export default ForwardRef;
