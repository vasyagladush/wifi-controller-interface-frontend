import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgColors = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    ref={ref}
  >
    <g fill="none" fillRule="evenodd">
      <circle cx={23.763} cy={16.192} r={13.271} fill="#FC521F" opacity={0.6} />
      <circle cx={15.468} cy={32.308} r={13.271} fill="#66BF3C" opacity={0.6} />
      <path
        fill="#FF5F95"
        d="M15.468 19.036c6.075 0 11.197 4.082 12.772 9.653a13.234 13.234 0 0 1-4.477.775c-6.075 0-11.197-4.082-12.772-9.653a13.235 13.235 0 0 1 4.477-.775Z"
      />
      <circle cx={32.532} cy={32.308} r={13.271} fill="#1EA7FD" opacity={0.6} />
      <path
        fill="#87E6E5"
        d="M24 22.142a13.243 13.243 0 0 1 4.74 10.166c0 4.08-1.842 7.731-4.74 10.166a13.242 13.242 0 0 1-4.74-10.166c0-4.026 1.793-7.634 4.624-10.068Z"
      />
      <path
        fill="#FBD178"
        d="M32.532 19.036c1.41 0 2.768.22 4.043.627-1.526 5.647-6.684 9.8-12.812 9.8-1.41 0-2.77-.22-4.044-.627 1.526-5.646 6.684-9.8 12.813-9.8Z"
      />
      <path
        fill="#FFF"
        d="m24 22.142.012.01c.163.137.322.277.477.421l-.1-.091c.078.07.155.142.23.214l-.13-.123c.08.074.159.15.237.225l-.106-.102c.07.068.141.136.21.205l-.104-.103c.086.084.171.17.255.256l-.15-.153.227.232c.256.268.501.546.735.835l-.07-.085c.076.091.15.184.223.278l-.153-.193c.07.086.138.173.205.26l-.052-.067.182.239-.13-.171c.068.088.135.178.2.268l-.07-.097c.077.104.153.209.227.315l-.156-.218c.069.094.137.19.203.286l-.047-.068c.058.083.115.167.172.252l-.125-.184a13.27 13.27 0 0 1 .597.949l-.058-.1c.056.096.111.194.165.292L27 25.732a13.23 13.23 0 0 1 .473.907 13.205 13.205 0 0 1 .395.926l-.063-.161c.035.087.07.175.102.264l-.039-.103c.04.103.078.206.115.31l-.076-.207c.04.108.08.217.117.326l-.041-.118.095.279-.054-.16c.039.112.076.225.112.34l-.058-.18c.034.103.067.208.099.313l.065.221-.037.014.036-.014c-.288.104-.582.197-.88.281h.001c-.291.082-.587.154-.886.216l.064-.013c-.149.032-.298.06-.448.087l.384-.074c-.138.03-.277.056-.417.08l.033-.006a13.24 13.24 0 0 1-.465.074l.432-.068c-.156.027-.313.052-.47.073l.038-.005c-.133.019-.266.035-.4.05l.361-.045c-.154.022-.31.04-.466.056l.105-.01a13.34 13.34 0 0 1-.509.045l.404-.035c-.155.016-.31.029-.467.04l.063-.005c-.156.011-.312.02-.47.025l.407-.02c-.144.009-.289.016-.434.021h.027c-.16.005-.322.008-.484.008l-.45-.008a13.436 13.436 0 0 1-.97-.067l.046.004a13.292 13.292 0 0 1-.424-.05l.379.046a13.286 13.286 0 0 1-.455-.057l.076.011a13.245 13.245 0 0 1-.485-.075l.409.064a13.24 13.24 0 0 1-.458-.073l.05.01c-.13-.023-.26-.048-.388-.074l.338.064a13.206 13.206 0 0 1-.458-.089l.12.025a13.188 13.188 0 0 1-.496-.111l.376.086a13.184 13.184 0 0 1-.44-.102l.064.016c-.137-.034-.274-.07-.41-.108l.346.092c-.14-.035-.279-.072-.416-.111l-.398-.12.07-.248c.028-.098.057-.195.088-.292l-.029.093c.04-.133.084-.264.129-.395l-.1.302c.035-.11.07-.218.108-.326v-.001c.13-.376.277-.745.44-1.105l-.08.179a13.2 13.2 0 0 1 .138-.31l-.059.13.113-.244-.054.115c.051-.11.104-.22.158-.328l-.104.213c.05-.105.101-.209.153-.312l-.05.1c.042-.083.083-.165.126-.246a13.432 13.432 0 0 1 .88-1.448l-.117.17c.059-.086.119-.173.18-.259l-.063.09c.053-.077.108-.154.163-.23l-.1.14c.074-.104.149-.207.226-.308l-.126.169a13.327 13.327 0 0 1 1.21-1.432l-.19.198c.074-.079.15-.157.225-.234l-.035.035.196-.197-.161.162c.077-.079.155-.157.235-.234l-.074.072c.067-.066.135-.132.204-.197l-.13.125c.096-.094.194-.186.294-.277l-.164.152c.072-.068.145-.136.22-.202l-.056.05a14.774 14.774 0 0 1 .387-.34l.03-.025Z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgColors);
export default ForwardRef;
