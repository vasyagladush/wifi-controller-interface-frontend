import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgQuickbooksIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.133c.955 0 1.73.776 1.73 1.734v9.066h1.6a2.934 2.934 0 0 0 0-5.866h-.666V7.333h.665A4.663 4.663 0 0 1 20.63 12a4.662 4.662 0 0 1-4.658 4.667h-3.329zm-4.658 3.2h3.329v12.533c-.956 0-1.73-.776-1.73-1.733V9.066h-1.6a2.934 2.934 0 0 0 0 5.867h.666v1.733h-.665A4.662 4.662 0 0 1 3.326 12a4.662 4.662 0 0 1 4.658-4.667Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgQuickbooksIcon);
export default ForwardRef;
