import * as React from "react";
import { type SVGProps } from "react";
const SvgProducts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.75 6.75h-1.065L11.9 1.878l-1.302.744 2.359 4.128H5.042l2.36-4.128-1.303-.744L3.315 6.75H2.25a.75.75 0 0 0-.724.947l2.1 7.698A1.504 1.504 0 0 0 5.072 16.5h7.855c.673 0 1.269-.454 1.447-1.106l2.1-7.698a.748.748 0 0 0-.725-.946ZM12.927 15v.75V15H5.073l-1.84-6.75h11.534L12.927 15Z"
      fill="currentColor"
    />
    <path
      d="M6.75 9.75h1.5v3.75h-1.5V9.75Zm3 0h1.5v3.75h-1.5V9.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgProducts;
