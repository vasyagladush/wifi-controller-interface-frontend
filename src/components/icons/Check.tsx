import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={10}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M3.729 7.288c-.226 0-.452-.113-.622-.282L.226 3.955c-.34-.34-.283-.848.056-1.187.34-.339.848-.282 1.187.057l2.316 2.373L8.587.226a.82.82 0 0 1 1.187 0 .82.82 0 0 1 0 1.186L4.35 7.006c-.17.17-.395.282-.621.282Z"
      fill="#F4F7F9"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
