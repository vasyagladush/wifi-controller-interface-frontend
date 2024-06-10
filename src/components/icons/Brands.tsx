import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBrands = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="m3.887 9.741-1.117 4.84a.748.748 0 0 0 1.146.792L8 12.651l4.084 2.722a.75.75 0 0 0 1.138-.83l-1.372-4.8 3.402-3.06a.75.75 0 0 0-.443-1.306l-4.275-.34L8.684.94a.749.749 0 0 0-1.367 0l-1.85 4.096-4.276.34A.75.75 0 0 0 .727 6.66l3.16 3.08Zm2.14-3.244a.749.749 0 0 0 .624-.44L8 3.072l1.35 2.985a.749.749 0 0 0 .623.44l2.98.236-2.454 2.208a.751.751 0 0 0-.22.764l.94 3.288-2.802-1.868a.747.747 0 0 0-.832 0l-2.928 1.952.788-3.41a.75.75 0 0 0-.207-.704L2.959 6.74l3.068-.244Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBrands);
export default ForwardRef;
