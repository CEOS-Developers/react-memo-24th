import type { ComponentPropsWithoutRef } from 'react';

type IconButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'aria-label'> & {
  label: string;
  icon: string;
};

function IconButton({ label, icon, className = '', type = 'button', ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      type={type}
      aria-label={label}
      className={`flex shrink-0 items-center justify-center rounded-full disabled:cursor-default ${className}`}
    >
      <img src={icon} alt="" aria-hidden="true" className="size-8" />
    </button>
  );
}

export default IconButton;
