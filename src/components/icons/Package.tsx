import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPackage = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m41.25 23.5-22.5-12.975"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M52.5 40V20a5 5 0 0 0-2.5-4.324l-17.5-10a5 5 0 0 0-5 0l-17.5 10A5 5 0 0 0 7.5 20v20a5 5 0 0 0 2.5 4.325l17.5 10a5 5 0 0 0 5 0l17.5-10A5 5 0 0 0 52.5 40Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.175 17.4 30 30.025 51.825 17.4M30 55.2V30"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPackage);
export default ForwardRef;
