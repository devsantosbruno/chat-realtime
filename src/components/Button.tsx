import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button(props: ButtonProps) {
  const Component = props.asChild ? Slot : "button";

  return (
    <Component
      className="bg-violet-500 text-white flex items-center gap-3 px-4 font-light text-lg w-full min-h-[60px] rounded-xl [word-break: break-word]"
      {...props}
    />
  );
}
