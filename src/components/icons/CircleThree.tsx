import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const CircleThree = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="10.5" fill="white" stroke="#ADB5BD" />
    <path
      d="M11.108 10.722L13.487 7.784V6.9H7.481V8.031H11.862L9.574 10.839V11.749H10.302C11.862 11.749 12.551 12.373 12.551 13.335C12.551 14.323 11.771 14.947 10.406 14.947C9.288 14.947 8.274 14.544 7.663 13.972L7.065 14.999C7.832 15.688 9.106 16.104 10.406 16.104C12.72 16.104 13.851 14.856 13.851 13.322C13.851 11.918 12.928 10.891 11.108 10.722Z"
      fill="#556CB1"
    />
  </svg>
);
const ForwardRef = forwardRef(CircleThree);
export default ForwardRef;
