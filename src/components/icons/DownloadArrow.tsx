import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgDownloadArrow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={11}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <g clipPath="url(#downloadArrow_svg__a)" fill="currentColor">
      <path d="M10.344 6.164c-.26-.313-.78-.365-1.091-.104L6.03 8.724V.784A.801.801 0 0 0 5.25 0a.801.801 0 0 0-.78.784v7.783L1.249 5.903c-.312-.261-.832-.209-1.092.104-.26.314-.208.836.104 1.097l4.314 3.553c.156.26.364.418.676.418h.104a1 1 0 0 0 .52-.157l4.366-3.605c.312-.313.364-.835.104-1.149ZM9.564 14H.988a.801.801 0 0 1-.78-.783c0-.418.364-.783.78-.783h8.576c.416 0 .78.365.78.783a.801.801 0 0 1-.78.784Z" />
    </g>
    <defs>
      <clipPath id="downloadArrow_svg__a">
        <path fill="#fff" d="M0 0h10.5v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgDownloadArrow);
export default ForwardRef;
