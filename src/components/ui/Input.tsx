import { type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
};

export const Input = ({ className, ref, ...props }: InputProps) => {
  return (
    <input
      className={`${className} focus-within:ring-offset-background rounded-md border px-3 py-1.5
ring-offset-2 transition outline-none focus-visible:ring-2 focus-visible:ring-black`}
      ref={ref}
      {...props}
    />
  );
};
