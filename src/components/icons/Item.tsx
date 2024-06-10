import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgItem = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width={21}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
  >
    <path fill="url(#item_svg__a)" d="M0 0h21v32H0z" />
    <defs>
      <pattern
        id="item_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#item_svg__b"
          transform="matrix(.00124 0 0 .00081 0 0)"
        />
      </pattern>
      <image
        id="item_svg__b"
        width={807}
        height={1231}
      />
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgItem);
export default ForwardRef;