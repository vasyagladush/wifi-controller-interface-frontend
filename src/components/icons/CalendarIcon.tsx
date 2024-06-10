import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M6.417 10.083H8.25v1.833H6.417v-1.833Zm0 3.667H8.25v1.833H6.417V13.75Zm3.667-3.667h1.833v1.833h-1.833v-1.833Zm0 3.667h1.833v1.833h-1.833V13.75Zm3.666-3.667h1.834v1.833H13.75v-1.833Zm0 3.667h1.834v1.833H13.75V13.75Z"
      fill="#8181A5"
    />
    <path
      d="M4.583 20.166h12.834a1.835 1.835 0 0 0 1.833-1.833V5.5a1.835 1.835 0 0 0-1.833-1.834h-1.834V1.833H13.75v1.833h-5.5V1.833H6.417v1.833H4.583A1.835 1.835 0 0 0 2.75 5.5v12.833c0 1.011.822 1.833 1.833 1.833ZM17.417 7.333v11H4.584v-11h12.834Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarIcon);
export default ForwardRef;
