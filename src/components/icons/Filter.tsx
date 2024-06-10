import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M12 0H1.334a.667.667 0 0 0-.667.667v1.726c0 .349.142.692.389.938l3.611 3.612V12a.667.667 0 0 0 .965.597l2.666-1.334a.667.667 0 0 0 .369-.596V6.943l3.611-3.612c.247-.246.389-.589.389-.938V.667A.666.666 0 0 0 12 0ZM7.53 6.195a.664.664 0 0 0-.195.472v3.588L6 10.92V6.667a.664.664 0 0 0-.195-.472L2 2.393v-1.06h9.334l.002 1.056-3.807 3.806Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;
