import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEmptyAvatar = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M25 28.125c7.764 0 14.063-6.299 14.063-14.063C39.063 6.3 32.763 0 25 0c-7.764 0-14.063 6.299-14.063 14.063 0 7.763 6.3 14.062 14.063 14.062Zm12.5 3.125h-5.38A17.018 17.018 0 0 1 25 32.813c-2.54 0-4.941-.567-7.12-1.563H12.5C5.596 31.25 0 36.846 0 43.75v1.563C0 47.9 2.1 50 4.688 50h40.624C47.9 50 50 47.9 50 45.312V43.75c0-6.904-5.596-12.5-12.5-12.5Z"
      fill="#8181A5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEmptyAvatar);
export default ForwardRef;
