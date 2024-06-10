import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBurgerMenuIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <circle cx={16} cy={16} r={16} fill="#3B892A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 11a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H10Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBurgerMenuIcon);
export default ForwardRef;
