import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgExclamation = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    fill="#EF6355"
    width={20}
    height={20}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path d="M128 20a108 108 0 1 0 108 108A108.122 108.122 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.095 84.095 0 0 1-84 84Zm-12-80V80a12 12 0 1 1 24 0v52a12 12 0 1 1-24 0Zm28 40a16 16 0 1 1-16-16 16.018 16.018 0 0 1 16 16Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgExclamation);
export default ForwardRef;
