import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPlugin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    ref={ref}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#79C9FC"
        d="M26 15.4v6.069a2.541 2.541 0 0 1-.413.044.264.264 0 0 1-.21-.092l-.11-.139-.135-.116a4.93 4.93 0 0 0-3.236-1.203c-2.692 0-4.896 2.145-4.896 4.817 0 2.673 2.204 4.818 4.896 4.818 1.301 0 2.419-.31 3.227-1.237.331-.38.445-.454.464-.454.095 0 .248.017.413.045V33a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V15a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v.4Z"
      />
      <path
        fill="#87E6E5"
        d="M28 32.571c0 .79.657 1.429 1.468 1.429h17.064c.81 0 1.468-.64 1.468-1.429V15.43c0-.79-.658-1.429-1.468-1.429H29.468c-.81 0-1.468.64-1.468 1.429v6.407c-.067.43-.143.81-.254.972-.321.476-1.506.705-2.159.705a2.263 2.263 0 0 1-1.766-.836 2.93 2.93 0 0 0-1.925-.714c-1.6 0-2.896 1.262-2.896 2.817 0 1.556 1.296 2.818 2.896 2.818.644 0 1.344-.12 1.72-.551.524-.6 1.12-1.14 1.971-1.14.653 0 2.004.27 2.236.705.059.111.117.31.177.544v5.415Z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPlugin);
export default ForwardRef;
