import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCustomers = (
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
      d="M12.453 8.286a4.252 4.252 0 0 0 .563-2.58c-.134-1.338-.881-2.52-2.102-3.33l-.829 1.25c.84.556 1.35 1.349 1.439 2.23a2.77 2.77 0 0 1-.804 2.24l-.894.894 1.213.356c3.174.93 3.21 4.122 3.21 4.154h1.5c0-1.342-.716-3.964-3.296-5.214Z"
      fill="currentColor"
    />
    <path
      d="M7.125 9c1.655 0 3-1.346 3-3s-1.345-3-3-3c-1.654 0-3 1.346-3 3s1.346 3 3 3Zm0-4.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5ZM8.25 9.75H6a4.504 4.504 0 0 0-4.5 4.5V15H3v-.75c0-1.655 1.346-3 3-3h2.25c1.655 0 3 1.345 3 3V15h1.5v-.75c0-2.482-2.018-4.5-4.5-4.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCustomers);
export default ForwardRef;
