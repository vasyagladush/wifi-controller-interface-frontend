import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSuppliers = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M16.5 6a.57.57 0 0 0 0-.157v-.06a.578.578 0 0 0-.09-.18l-.075-.098-.06-.045-.09-.067-6.75-3.75a.75.75 0 0 0-.75 0l-6.75 3.75-.068.052-.082.06a.308.308 0 0 0-.052.083.293.293 0 0 0-.06.074.443.443 0 0 0-.046.106.225.225 0 0 0 0 .075A.57.57 0 0 0 1.5 6v6a.75.75 0 0 0 .39.652l6.75 3.75a.564.564 0 0 0 .098.046h.075c.123.03.251.03.374 0h.075l.105-.046 6.75-3.75A.75.75 0 0 0 16.5 12V6ZM9 8.902 3.795 6l2.07-1.14 5.123 2.925L9 8.902Zm0-5.79L14.205 6l-1.68.938-5.123-2.933L9 3.112ZM3 7.276l5.25 2.94v4.26L3 11.557V7.275Zm6.75 7.2v-4.26L12 8.955v2.295l1.5-.75V8.115l1.5-.833v4.275l-5.25 2.918Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSuppliers);
export default ForwardRef;
