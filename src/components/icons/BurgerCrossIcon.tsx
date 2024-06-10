import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBurgerCrossIcon = (
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
      d="M21.656 11.757a1 1 0 0 0-1.414-1.414L16 14.585l-4.243-4.242a1 1 0 0 0-1.414 1.414l4.242 4.242-4.242 4.243a1 1 0 1 0 1.414 1.414L16 17.414l4.242 4.242a1 1 0 0 0 1.415-1.414L17.413 16l4.242-4.242Z"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBurgerCrossIcon);
export default ForwardRef;
