import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgQrCodeScanGreen = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={47}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <circle cx={23.5} cy={24} r={23.5} fill="#DBF7EF" />
    <g clipPath="url(#qr-code-scan-green_svg__a)" fill="#6CB155">
      <path d="M32.436 13.256h-3.073a.754.754 0 0 0-.75.75c0 .411.338.75.75.75h3.073c.54 0 .977.437.977.977v3.073c0 .411.338.75.75.75.411 0 .75-.339.75-.75v-3.073a2.478 2.478 0 0 0-2.477-2.477ZM13.506 19.556c.411 0 .75-.339.75-.75v-3.073c0-.54.437-.977.977-.977h3.073c.411 0 .75-.339.75-.75a.754.754 0 0 0-.75-.75h-3.073a2.478 2.478 0 0 0-2.477 2.477v3.073c0 .411.338.75.75.75ZM18.306 33.913h-3.073a.977.977 0 0 1-.977-.977v-3.073a.754.754 0 0 0-.75-.75.754.754 0 0 0-.75.75v3.073a2.478 2.478 0 0 0 2.477 2.477h3.073c.411 0 .75-.338.75-.75a.754.754 0 0 0-.75-.75ZM34.163 29.113a.754.754 0 0 0-.75.75v3.073c0 .54-.437.977-.977.977h-3.073a.754.754 0 0 0-.75.75c0 .412.338.75.75.75h3.073a2.478 2.478 0 0 0 2.477-2.477v-3.073a.754.754 0 0 0-.75-.75ZM27.503 18.184h2.04a.4.4 0 0 1 .399.398v2.04c0 .412.338.75.75.75.41 0 .75-.338.75-.75v-2.04a1.902 1.902 0 0 0-1.9-1.898h-2.04a.754.754 0 0 0-.75.75c0 .411.34.75.75.75ZM16.227 18.582v2.04c0 .412.339.75.75.75.412 0 .75-.338.75-.75v-2.04a.4.4 0 0 1 .399-.398h2.04c.411 0 .75-.339.75-.75a.754.754 0 0 0-.75-.75h-2.04a1.902 1.902 0 0 0-1.899 1.898ZM20.166 30.4h-2.04a.4.4 0 0 1-.399-.4v-2.04a.754.754 0 0 0-.75-.75.754.754 0 0 0-.75.75V30c0 1.047.853 1.9 1.899 1.9h2.04c.411 0 .75-.34.75-.75a.754.754 0 0 0-.75-.75ZM31.442 30v-2.04a.754.754 0 0 0-.75-.75.754.754 0 0 0-.75.75V30a.4.4 0 0 1-.4.4h-2.04a.754.754 0 0 0-.75.75c0 .41.34.75.75.75h2.04a1.902 1.902 0 0 0 1.9-1.9ZM12.799 24.334c0 .411.338.75.75.75H34.12c.412 0 .75-.339.75-.75a.754.754 0 0 0-.75-.75H13.55a.754.754 0 0 0-.75.75Z" />
    </g>
    <defs>
      <clipPath id="qr-code-scan-green_svg__a">
        <path
          fill="#fff"
          transform="translate(12.756 13.256)"
          d="M0 0h22.157v22.157H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgQrCodeScanGreen);
export default ForwardRef;
