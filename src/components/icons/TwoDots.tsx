import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTwoDots = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M19.667 16A3.67 3.67 0 0 0 16 19.667a3.67 3.67 0 0 0 3.667 3.666 3.67 3.67 0 0 0 3.666-3.666A3.67 3.67 0 0 0 19.667 16Zm0 5.5a1.835 1.835 0 0 1-1.834-1.833c0-1.011.823-1.834 1.834-1.834 1.01 0 1.833.823 1.833 1.834a1.835 1.835 0 0 1-1.833 1.833Z"
      fill="#00BC82"
    />
    <circle cx={20} cy={20} r={20} fill="#DBF7EF" />
    <path
      d="M23.208 23.665a2.292 2.292 0 1 0 0-4.583 2.292 2.292 0 0 0 0 4.583Z"
      fill="#00BC82"
    />
    <path
      d="M20 21.374c0-.747.363-1.405.917-1.823a2.264 2.264 0 0 0-1.375-.469 2.292 2.292 0 0 0 0 4.583c.497 0 .98-.166 1.375-.469A2.28 2.28 0 0 1 20 21.374Z"
      fill="#00BC82"
    />
    <path
      d="M27.333 12.668H12.667a1.835 1.835 0 0 0-1.834 1.833v11c0 1.011.822 1.834 1.834 1.834h14.666a1.835 1.835 0 0 0 1.834-1.834v-11a1.835 1.835 0 0 0-1.834-1.833ZM12.667 25.501v-11h14.666l.002 11H12.667Z"
      fill="#00BC82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTwoDots);
export default ForwardRef;
