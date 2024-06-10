import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgXeroIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    width={800}
    height={800}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    ref={ref}
  >
    <path
      d="M128.003 256C198.693 256 256 198.689 256 128 256 57.3 198.699 0 128.003 0S0 57.3 0 128c0 70.689 57.307 128 128.003 128"
      fill="#1FC0E7"
    />
    <path
      d="m62.367 127.968 21.8-21.902a3.913 3.913 0 0 0-2.782-6.656c-1.052 0-2.036.41-2.776 1.166L56.821 122.38l-21.874-21.845a3.904 3.904 0 0 0-2.76-1.126 3.908 3.908 0 0 0-2.736 6.695l21.8 21.829-21.788 21.845c-.763.762-1.184 1.752-1.184 2.805a3.913 3.913 0 0 0 3.909 3.914c1.04 0 2.02-.399 2.759-1.138l21.845-21.857 21.76 21.771c.774.797 1.764 1.224 2.833 1.224a3.911 3.911 0 0 0 3.903-3.914c0-1.041-.398-2.02-1.138-2.76l-21.788-21.879.005.023Zm129.599-.006a7.114 7.114 0 0 0 7.111 7.111c3.903 0 7.088-3.186 7.088-7.11 0-3.926-3.185-7.112-7.094-7.112-3.908 0-7.088 3.186-7.088 7.111h-.017Zm-13.454 0c0-11.35 9.216-20.594 20.56-20.594 11.32 0 20.553 9.245 20.553 20.594 0 11.35-9.227 20.594-20.554 20.594-11.338 0-20.56-9.233-20.56-20.594Zm-8.09 0c0 15.815 12.857 28.695 28.65 28.695 15.792 0 28.649-12.868 28.649-28.69 0-15.814-12.857-28.694-28.65-28.694-15.798 0-28.649 12.874-28.649 28.695v-.006Zm-2.03-28.2h-1.196c-3.612 0-7.094 1.138-10 3.385-.399-1.74-1.969-3.072-3.835-3.072a3.87 3.87 0 0 0-3.868 3.891l.011 48.327c0 2.145 1.764 3.892 3.897 3.892a3.914 3.914 0 0 0 3.908-3.903v-29.719c0-9.898.91-13.903 9.375-14.961.797-.097 1.639-.08 1.65-.08 2.31-.085 3.96-1.684 3.96-3.84a3.923 3.923 0 0 0-3.926-3.914l.023-.006Zm-75.015 23.484c0-.114.012-.228.017-.33 2.265-8.988 10.388-15.627 20.054-15.627 9.785 0 17.977 6.792 20.138 15.94H93.372l.005.017Zm48.202-.74c-1.684-7.981-6.047-14.54-12.686-18.75-9.716-6.178-22.54-5.837-31.915.853-7.657 5.444-12.077 14.365-12.077 23.552 0 2.304.284 4.63.853 6.924 2.89 11.377 12.664 20.002 24.315 21.43 3.458.42 6.826.227 10.297-.683 3.003-.74 5.899-1.946 8.567-3.664 2.77-1.78 5.086-4.136 7.339-6.952.034-.056.08-.096.125-.153 1.559-1.934 1.268-4.7-.438-6.008-1.445-1.109-3.869-1.558-5.769.888-.41.592-.87 1.195-1.365 1.792-1.519 1.678-3.402 3.3-5.655 4.562a20.63 20.63 0 0 1-9.614 2.43c-11.366-.131-17.442-8.079-19.61-13.745a21.142 21.142 0 0 1-.87-3.3l-.057-.597h40.79c5.586-.125 8.59-4.079 7.759-8.59l.011.011Z"
      fill="#FFF"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgXeroIcon);
export default ForwardRef;
