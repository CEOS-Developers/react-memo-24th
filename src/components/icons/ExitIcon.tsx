import type { SVGProps } from "react";

type ExitIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export default function ExitIcon({ size, ...props }: ExitIconProps) {
  return (
    <svg
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M9.33301 9.33301L22.6663 22.6663M9.33301 22.6663L22.6663 9.33301" stroke="currentColor" strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
