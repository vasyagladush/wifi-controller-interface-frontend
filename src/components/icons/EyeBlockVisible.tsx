import * as React from "react";
import { type SVGProps } from "react";
const SvgEyeBlockVisible = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#eye-block-visible_svg__a)" fill="#8181A5">
      <path d="M14.873 4.108c-.927-1.222-2.001-2.222-3.191-2.918a15.856 15.856 0 0 0-1.37-.663A7.548 7.548 0 0 0 7.49 0C4.635 0 2.033 1.57.116 4.108a.585.585 0 0 0 0 .706c1.053 1.4 2.317 2.496 3.707 3.213 0 0 1.349.895 3.666.895 2.865 0 5.467-1.57 7.384-4.108a.585.585 0 0 0 0-.706Zm-4.224.558c-.02.306-.084.6-.19.885-.01.01-.01.032-.02.042-.01.021-.01.043-.021.064A3.158 3.158 0 0 1 7.5 7.627a3.138 3.138 0 0 1-2.718-1.56c-.01-.02-.021-.031-.032-.052a.23.23 0 0 0-.031-.053 3.073 3.073 0 0 1-.369-1.696c.095-1.57 1.37-2.833 2.939-2.939a3.16 3.16 0 0 1 1.907.495l-.01.01c.368.233.684.549.926.907l.01-.01c.37.536.57 1.21.527 1.937Z" />
      <path d="M7.5 6.152a1.696 1.696 0 1 0 0-3.392 1.696 1.696 0 0 0 0 3.392Z" />
    </g>
    <defs>
      <clipPath id="eye-block-visible_svg__a">
        <path fill="#fff" d="M0 0h15v8.922H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeBlockVisible;
