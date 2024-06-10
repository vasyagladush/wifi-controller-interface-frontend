import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const Key = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.66659 7.33464C4.43456 7.33361 5.17869 7.0678 5.77351 6.58203C6.36834 6.09627 6.77747 5.42025 6.93192 4.66797H8.33325V6.0013H9.66659V4.66797H10.9999V6.66797H12.3333V4.66797H12.9999V3.33464H6.93192C6.77747 2.58235 6.36834 1.90634 5.77351 1.42057C5.17869 0.934801 4.43456 0.668995 3.66659 0.667969C1.82859 0.667969 0.333252 2.1633 0.333252 4.0013C0.333252 5.8393 1.82859 7.33464 3.66659 7.33464ZM3.66659 2.0013C4.76925 2.0013 5.66659 2.89864 5.66659 4.0013C5.66659 5.10397 4.76925 6.0013 3.66659 6.0013C2.56392 6.0013 1.66659 5.10397 1.66659 4.0013C1.66659 2.89864 2.56392 2.0013 3.66659 2.0013Z"
      fill="white"
    />
  </svg>
);
const ForwardRef = forwardRef(Key);
export default ForwardRef;