import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown1 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={12}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M.41 1.278A.78.78 0 0 1 .653.67.94.94 0 0 1 1.929.61l4.07 3.828L9.829.306c.365-.365.911-.426 1.276-.061s.425.911.06 1.276L6.73 6.261c-.182.182-.365.303-.608.303s-.486-.06-.668-.243L.713 1.886C.47 1.764.41 1.52.41 1.278Z"
      fill="#6C6C8A"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown1);
export default ForwardRef;
