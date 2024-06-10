import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEvriCourier = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={100}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
  >
    <path fill="url(#evri-courier_svg__a)" d="M0 0h100v29.167H0z" />
    <defs>
      <pattern
        id="evri-courier_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#evri-courier_svg__b"
          transform="matrix(.00251 0 0 .00862 -.003 0)"
        />
      </pattern>
      <image
        id="evri-courier_svg__b"
        width={400}
        height={116}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgEvriCourier);
export default ForwardRef;
