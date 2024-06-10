import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgFileBlankIcon = (
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
      d="M13.291 5.787c-.007-.021-.013-.042-.022-.062a.665.665 0 0 0-.13-.196l-4-4a.665.665 0 0 0-.196-.13c-.02-.01-.041-.015-.063-.022a.66.66 0 0 0-.172-.034c-.015-.002-.027-.009-.042-.009H4c-.736 0-1.333.598-1.333 1.333v10.667c0 .735.598 1.333 1.333 1.333h8c.735 0 1.333-.598 1.333-1.333V6.001c0-.014-.007-.027-.008-.042a.66.66 0 0 0-.034-.172Zm-2.234-.453H9.333V3.61l1.724 1.724Zm-7.057 8V2.667h4v3.334a.667.667 0 0 0 .666.666H12L12 13.334H4Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFileBlankIcon);
export default ForwardRef;
