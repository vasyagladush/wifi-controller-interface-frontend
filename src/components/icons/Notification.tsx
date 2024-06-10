import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgNotification = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={20}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <svg
      width="20"
      height="26"
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.439 18.7982C16.0764 17.6785 15.296 16.0461 15.296 14.3152V11.8748C15.296 8.79453 12.9421 6.24746 9.89642 5.8209V4.87754C9.89642 4.39355 9.49145 4.00391 8.99789 4.00391C8.50434 4.00391 8.09937 4.38945 8.09937 4.87344V5.8168C5.04945 6.24746 2.69979 8.79453 2.69979 11.8748V14.3152C2.69979 16.0461 1.91938 17.6826 0.552613 18.8064C0.202484 19.0977 0 19.5201 0 19.9672C0 20.8121 0.704476 21.4971 1.57347 21.4971H16.4223C17.2913 21.4971 17.9958 20.8121 17.9958 19.9672C18 19.5201 17.7975 19.0977 17.439 18.7982Z"
        fill="#6C6C8A"
      />
      <path
        d="M9.30302 25.625C10.9313 25.625 12.2981 24.4971 12.6103 23H6C6.31216 24.4971 7.67471 25.625 9.30302 25.625Z"
        fill="#6C6C8A"
      />
      <circle
        cx="13.167"
        cy="6.5"
        r="5.5"
        fill="#EF6355"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  </svg>
);
const ForwardRef = forwardRef(SvgNotification);
export default ForwardRef;
