import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMailSendInput = (
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
      d="M15 3H3c-.827 0-1.5.673-1.5 1.5v9c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5Zm0 1.5v.383L9 9.55 3 4.884V4.5h12Zm-12 9V6.783l5.54 4.309a.745.745 0 0 0 .92 0L15 6.783l.002 6.717H3Z"
      fill="#027AFF"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMailSendInput);
export default ForwardRef;
