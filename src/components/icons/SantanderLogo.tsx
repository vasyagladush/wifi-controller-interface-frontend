import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSantanderLogo = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={30}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <path
      d="M20.892 12.938c-.067-1.016-.332-2.032-.863-2.912l-4.51-8.062A7.009 7.009 0 0 1 14.79 0l-.199.339a6.545 6.545 0 0 0 0 6.435l3.648 6.435a6.545 6.545 0 0 1 0 6.436l-.2.338a7.01 7.01 0 0 0-.729-1.964l-3.316-5.893-2.122-3.794a7.005 7.005 0 0 1-.73-1.964l-.199.338c-1.127 1.965-1.127 4.404 0 6.436l3.648 6.435a6.545 6.545 0 0 1 0 6.435l-.199.34a7.004 7.004 0 0 0-.73-1.965l-4.576-8.061c-.597-1.084-.862-2.304-.862-3.523C3.382 14.09 0 16.867 0 20.051c0 4.471 6.5 8.061 14.525 8.061s14.524-3.59 14.524-8.06c.067-3.05-3.25-5.826-8.157-7.114Z"
      fill="#EC0000"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSantanderLogo);
export default ForwardRef;
