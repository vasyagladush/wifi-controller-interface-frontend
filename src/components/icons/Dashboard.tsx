import * as React from "react";
import { type SVGProps } from "react";
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 2.25H3a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75Zm-.75 4.5h-3v-3h3v3Zm3.75 1.5H15a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75Zm.75-4.5h3v3h-3v-3ZM2.25 15a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0-.75.75V15Zm1.5-3.75h3v3h-3v-3Zm6 3.75a.75.75 0 0 0 .75.75H15a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V15Zm1.5-3.75h3v3h-3v-3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDashboard;
