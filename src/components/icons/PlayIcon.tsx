import type { SVGProps } from "react";

type PlayIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export default function PlayIcon({ size, ...props }: PlayIconProps) {
  return (
    <svg
      width={size ?? 13}
      height={size ?? 16}
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M0 16L13 8L0 0V16Z" fill="currentColor"/>
    </svg>
  );
}
