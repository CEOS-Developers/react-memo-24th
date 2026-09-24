import type { ChangeEvent } from "react";

interface InputProps {
  type?: "text" | "password" | "email";
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  ariaLabel?: string;
  autoComplete?: string;
}

function Input({
  type = "text",
  value,
  onChange,
  placeholder,
  ariaLabel,
  autoComplete,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={ariaLabel ?? placeholder}
      autoComplete={autoComplete}
      className="h-14 w-full rounded-xl bg-white px-5 text-gray-05 outline-none placeholder:text-gray-02"
    />
  );
}

export default Input;
