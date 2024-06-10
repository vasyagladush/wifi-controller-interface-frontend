import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgNoRemindersIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={105}
    height={102}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <rect
      x={0.433}
      width={76.988}
      height={93.443}
      rx={5}
      fill="url(#no-reminders-icon_svg__a)"
    />
    <path
      d="M.433 5a5 5 0 0 1 5-5H72.42a5 5 0 0 1 5 5v4.99H.433V5Z"
      fill="#C2CEDB"
    />
    <rect
      x={8.077}
      y={17.63}
      width={61.708}
      height={17.631}
      rx={3}
      fill="#fff"
    />
    <rect
      x={8.077}
      y={38.787}
      width={60.532}
      height={47.603}
      rx={3}
      fill="#fff"
    />
    <path stroke="#DBE3EB" strokeOpacity={0.7} d="M25.03 17.63v17.631" />
    <path
      stroke="#DBE3EB"
      strokeOpacity={0.67}
      d="M69.778 26.948H24.526M53.327 49.866H13.952M53.327 62.794H13.952M61.553 75.726H13.95"
    />
    <circle
      cx={65.871}
      cy={53.097}
      transform="rotate(-30 65.871 53.097)"
      fill="#fff"
      stroke="#859AAF"
      strokeWidth={5}
      r={18.218}
    />
    <path stroke="#6C6C8A" strokeWidth={4} d="m77.304 68.892 3.82 6.617" />
    <path
      d="m75.079 74.922 7.125-4.114 9.11 15.777a4.114 4.114 0 1 1-7.126 4.114l-9.11-15.777Z"
      fill="#9DB0C5"
    />
    <defs>
      <linearGradient
        id="no-reminders-icon_svg__a"
        x1={54.449}
        y1={97.414}
        x2={32.728}
        y2={0.898}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.019} stopColor="#DBE3EB" />
        <stop offset={1} stopColor="#ECEFF2" />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgNoRemindersIcon);
export default ForwardRef;
