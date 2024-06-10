import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M13.269 5.724a.665.665 0 0 0-.13-.196l-4-4a.665.665 0 0 0-.196-.13c-.02-.01-.041-.015-.063-.022a.661.661 0 0 0-.172-.034c-.014-.002-.027-.009-.041-.009H4c-.735 0-1.333.598-1.333 1.333v10.667c0 .735.598 1.333 1.333 1.333h8c.736 0 1.334-.598 1.334-1.333V6c0-.014-.008-.027-.009-.042a.636.636 0 0 0-.034-.172c-.007-.022-.013-.042-.022-.062Zm-2.211-.391H9.334V3.609l1.724 1.724Zm-7.058 8V2.666h4V6a.667.667 0 0 0 .667.666H12l.002 6.667H4Z"
      fill="#8181A5"
    />
    <path
      d="M5.333 8h5.333v1.333H5.333V8Zm0 2.666h5.333V12H5.333v-1.334Zm0-5.333h1.333v1.333H5.333V5.333Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;
