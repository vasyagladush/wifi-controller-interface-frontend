import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEyeIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M9.333 8C8.603 8 8 7.397 8 6.667c0-.236.069-.456.179-.649C8.119 6.013 8.06 6 8 6a2.013 2.013 0 0 0-2 2c0 1.095.905 2 2 2 1.094 0 2-.905 2-2 0-.061-.013-.119-.018-.179-.193.11-.413.179-.649.179Z"
      fill="#8181A5"
    />
    <path
      d="M8 3.333c-5.09 0-6.618 4.411-6.632 4.456l-.071.21.07.211c.015.045 1.544 4.456 6.633 4.456 5.088 0 6.617-4.411 6.632-4.456l.07-.21-.07-.211C14.618 7.744 13.088 3.333 8 3.333Zm0 8c-3.568 0-4.95-2.564-5.284-3.333C3.052 7.228 4.434 4.666 8 4.666c3.567 0 4.949 2.564 5.284 3.334-.337.772-1.72 3.333-5.284 3.333Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEyeIcon);
export default ForwardRef;
