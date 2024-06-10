import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPrinter = (
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
      d="M12.666 4.667H12V1.334H4v3.333h-.667c-1.103 0-2 .898-2 2v4.667c0 .735.598 1.333 1.333 1.333H4v2h8v-2h1.333c.735 0 1.333-.598 1.333-1.333V6.667c0-1.102-.897-2-2-2Zm-7.333-2h5.333v2H5.333v-2Zm5.333 10.667H5.333v-2.667h5.333v2.667Zm2.667-2H12v-2H4v2H2.666V6.667c0-.367.3-.666.667-.666h9.333c.368 0 .667.299.667.666v4.667Z"
      fill="#8181A5"
    />
    <path d="M9.333 6.666H12v1.333H9.333V6.666Z" fill="#8181A5" />
  </svg>
);
const ForwardRef = forwardRef(SvgPrinter);
export default ForwardRef;
