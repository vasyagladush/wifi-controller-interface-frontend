import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgOpencart = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={150}
    height={30}
    viewBox="0 0 512 100"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    ref={ref}
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="79.104%"
        x2="50%"
        y2="0%"
        id="opencart_svg__a"
      >
        <stop stopColor="#04B6F0" offset="0%" />
        <stop stopColor="#3ECAF0" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M50.751 52.353c0 7.648-2.274 14.09-6.838 19.305-4.763 5.464-10.952 8.207-18.528 8.207-7.596 0-13.765-2.743-18.528-8.207C2.291 66.443 0 60.001 0 52.353c0-7.669 2.291-14.109 6.857-19.305 4.816-5.413 11.005-8.118 18.528-8.118 7.576 0 13.765 2.705 18.528 8.118 4.564 5.196 6.838 11.636 6.838 19.305zm-15.084 0c0-3.464-.829-6.388-2.489-8.752-1.857-2.687-4.456-4.022-7.793-4.022-3.338 0-5.936 1.335-7.795 4.022-1.677 2.364-2.507 5.288-2.507 8.752 0 3.445.83 6.404 2.507 8.839 1.859 2.687 4.457 4.024 7.795 4.024 3.337 0 5.936-1.337 7.793-4.024 1.66-2.435 2.489-5.394 2.489-8.839zm69.623 0c0 7.144-2.057 13.386-6.189 18.726-4.42 5.845-10.121 8.786-17.049 8.786-4.89 0-9.038-1.425-12.43-4.239 0 .648.072 2.218.217 4.728.144 2.523.215 4.58.215 6.204 0 8.969-2.67 13.442-8.009 13.442-2.184 0-3.969-.776-5.395-2.31-1.407-1.55-2.111-3.412-2.111-5.61V33.752c0-2.129.722-3.97 2.165-5.52 1.443-1.534 3.23-2.308 5.359-2.308 3.21 0 5.556 1.602 7.036 4.798 3.157-3.861 7.469-5.792 12.935-5.792 6.946 0 12.629 2.885 17.067 8.678 4.114 5.359 6.189 11.601 6.189 18.745zm-15.084 0c0-3.464-.846-6.388-2.506-8.752-1.86-2.687-4.457-4.022-7.795-4.022-3.337 0-5.935 1.335-7.794 4.022-1.66 2.364-2.489 5.288-2.489 8.752 0 3.445.829 6.404 2.489 8.839 1.859 2.687 4.457 4.024 7.794 4.024 3.338 0 5.935-1.337 7.795-4.024 1.66-2.435 2.506-5.394 2.506-8.839zm69.965-1.622c0 2.523-.596 4.255-1.787 5.231-1.19.955-3.048 1.442-5.556 1.442h-27.225c0 2.887 1.354 5.105 4.06 6.655 2.183 1.211 4.853 1.826 8.01 1.826 2.455 0 5.395-.815 8.841-2.418 3.446-1.625 5.664-2.42 6.622-2.42 1.749 0 3.228.632 4.455 1.931 1.208 1.282 1.823 2.833 1.823 4.62 0 4.129-3.085 7.344-9.257 9.652-4.708 1.731-9.489 2.615-14.377 2.615-7.866 0-14.217-2.615-19.07-7.828-4.854-5.215-7.288-11.764-7.288-19.684 0-7.543 2.525-13.983 7.576-19.357 5.033-5.379 11.295-8.066 18.763-8.066 6.946 0 12.755 2.544 17.411 7.631 4.653 5.089 6.999 11.15 6.999 18.17zm-15.082-3.791c-.073-2.31-1.137-4.402-3.194-6.298-2.057-1.893-4.239-2.83-6.549-2.83-2.381 0-4.601.937-6.657 2.83-2.056 1.896-3.086 3.988-3.086 6.298h19.486zm65.76 24.011c0 2.203-.704 4.06-2.11 5.612-1.426 1.535-3.212 2.311-5.395 2.311-5.268 0-7.903-4.186-7.903-12.539 0-1.606.109-4.131.325-7.613.235-3.465.344-6.008.344-7.614 0-8.86-2.869-13.296-8.588-13.296-5.72 0-8.57 4.436-8.57 13.296 0 1.606.09 4.149.252 7.614.181 3.482.271 6.007.271 7.613 0 8.353-2.598 12.539-7.793 12.539-2.184 0-3.969-.776-5.377-2.311-1.425-1.552-2.129-3.409-2.129-5.612V33.736c0-2.187.704-4.042 2.129-5.54 1.408-1.516 3.212-2.272 5.395-2.272 3.608 0 6.115 1.602 7.522 4.798 2.436-3.861 6.747-5.792 12.918-5.792 5.719 0 10.266 1.514 13.603 4.527 3.41 3.232 5.106 7.668 5.106 13.316v28.178zm47.32-1.603c0 3.409-2.214 6.114-6.655 8.101a26.81 26.81 0 0 1-11.203 2.416c-7.597 0-13.766-2.743-18.529-8.207-4.564-5.215-6.855-11.657-6.855-19.305 0-7.669 2.327-14.144 6.999-19.449 4.673-5.321 10.788-7.974 18.385-7.974 4.384 0 8.155.649 11.295 1.931 4.381 1.732 6.563 4.437 6.563 8.118 0 1.857-.574 3.499-1.731 4.925-1.153 1.407-2.634 2.129-4.437 2.129-1.229 0-2.996-.415-5.305-1.225-2.308-.832-4.147-1.229-5.5-1.229-3.591 0-6.388 1.281-8.39 3.842-1.86 2.31-2.797 5.269-2.797 8.932 0 3.445.83 6.369 2.509 8.732 1.856 2.761 4.473 4.131 7.81 4.131 1.481 0 3.5-.433 6.079-1.319 2.582-.863 4.441-1.314 5.594-1.314 1.68 0 3.12.72 4.349 2.128 1.209 1.425 1.819 2.957 1.819 4.637zm54.829 1.603c0 2.203-.702 4.06-2.111 5.612-1.424 1.535-3.227 2.311-5.414 2.311-3.283 0-5.626-1.607-7.034-4.8-3.156 3.862-7.469 5.791-12.935 5.791-6.998 0-12.736-2.941-17.177-8.786-4.041-5.34-6.076-11.582-6.076-18.726 0-7.144 2.035-13.386 6.076-18.745 4.513-5.793 10.231-8.678 17.177-8.678 5.466 0 9.779 1.931 12.935 5.792 1.408-3.196 3.751-4.798 7.034-4.798 2.131 0 3.918.774 5.363 2.308 1.44 1.55 2.162 3.373 2.162 5.504v37.215zm-15.082-18.598c0-3.464-.829-6.388-2.489-8.752-1.931-2.687-4.529-4.022-7.793-4.022-3.339 0-5.936 1.335-7.796 4.022-1.675 2.364-2.505 5.288-2.505 8.752 0 3.445.809 6.404 2.414 8.839 1.915 2.687 4.548 4.024 7.887 4.024 3.336 0 5.933-1.337 7.793-4.024 1.66-2.435 2.489-5.394 2.489-8.839zm53.565-19.612c0 3.229-1.569 5.448-4.709 6.656-2.904.976-5.793 1.97-8.677 2.995-3.16 1.806-4.729 5.161-4.729 10.033v18.526c0 2.203-.722 4.06-2.126 5.612-1.428 1.535-3.232 2.311-5.414 2.311-2.199 0-4.006-.776-5.411-2.311-1.428-1.552-2.13-3.409-2.13-5.612V33.736c0-2.187.702-4.042 2.11-5.54 1.425-1.516 3.232-2.272 5.415-2.272 3.606 0 6.112 1.602 7.521 4.798 3.231-3.861 6.695-5.792 10.429-5.792 2.127 0 3.95.774 5.466 2.308 1.496 1.552 2.255 3.392 2.255 5.503zm39.348.686c0 3.355-1.317 5.466-3.93 6.37-1.285.45-3.974.684-8.068.684v30.47c0 2.203-.722 4.06-2.126 5.612-1.429 1.535-3.232 2.311-5.415 2.311-2.126 0-3.934-.776-5.378-2.311-1.44-1.552-2.163-3.409-2.163-5.612v-30.47c-3.104 0-5.358-.397-6.782-1.171-1.947-1.083-2.909-3.05-2.909-5.883 0-2.831.994-4.762 2.996-5.792 1.353-.758 3.591-1.153 6.695-1.153v-6.459c0-7.595 2.506-11.383 7.541-11.383 5.016 0 7.541 3.788 7.541 11.383v6.459c4.094 0 6.783.234 8.068.684 2.613.902 3.93 2.997 3.93 6.261zM512 24.266c-.041-4.631-8.598-6.733-30.749-6.733-51.976 0-65.162-2.22-79.274-17.069 5.936 8.916 9.184 25.639 64.121 24.807 57.318-.883 22.351 14.779 12.177 32.474 18.347-16.376 33.67-27.17 33.725-33.412v-.067zm-73.037 47.553a7.85 7.85 0 0 1-7.848 7.847c-4.349 0-7.865-3.516-7.865-7.847a7.86 7.86 0 0 1 7.865-7.866c4.333 0 7.848 3.517 7.848 7.866zm35.793 0a7.85 7.85 0 0 1-7.848 7.847c-4.345 0-7.864-3.516-7.864-7.847a7.86 7.86 0 0 1 7.864-7.866c4.333 0 7.848 3.517 7.848 7.866z"
      fill="url(#opencart_svg__a)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgOpencart);
export default ForwardRef;
