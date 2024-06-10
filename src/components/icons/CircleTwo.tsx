import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCircleTwo = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="10.5" fill="white" stroke="#ADB5BD" />
    <path
      d="M9.353 14.869L12.135 12.191C13.37 11.008 13.63 10.215 13.63 9.331C13.63 7.771 12.408 6.796 10.51 6.796C9.093 6.796 7.884 7.303 7.182 8.174L8.066 8.941C8.625 8.265 9.418 7.953 10.393 7.953C11.667 7.953 12.33 8.525 12.33 9.461C12.33 10.033 12.148 10.605 11.186 11.541L7.481 15.116V16H14.02V14.869H9.353Z"
      fill="black"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCircleTwo);
export default ForwardRef;
