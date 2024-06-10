import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgQuestion = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={14}
    height={14}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M8 0C3.588 0 0 3.588 0 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8Zm0 14.546A6.555 6.555 0 0 1 1.455 8 6.555 6.555 0 0 1 8 1.455 6.555 6.555 0 0 1 14.546 8 6.555 6.555 0 0 1 8 14.546Z"
      fill="#2a3b89"
    />
    <path
      d="M7.748 10.58a.927.927 0 0 0 0 1.851.932.932 0 0 0 .926-.925.936.936 0 0 0-.926-.927ZM7.903 3.564c-1.624 0-2.371.964-2.371 1.614 0 .47.398.689.722.689.65 0 .384-.926 1.615-.926.601 0 1.081.266 1.081.819 0 .65-.674 1.023-1.071 1.362-.35.301-.805.796-.805 1.828 0 .626.17.805.664.805.592 0 .708-.267.708-.494 0-.626.01-.99.674-1.503.325-.253 1.348-1.072 1.348-2.202S9.445 3.564 7.903 3.564Z"
      fill="#2a3b89"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgQuestion);
export default ForwardRef;
