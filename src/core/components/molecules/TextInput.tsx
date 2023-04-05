import { ChangeEventHandler, ReactNode } from "react";
import { TextElement, TextInputElement } from "../atoms";

interface TextInputProps {
  type?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  register?: any;
  helperText?: string;
  [key: string]: any;
}

export const TextInput = ({
  type,
  id,
  name,
  label,
  placeholder,
  icon,
  register,
  helperText,
}: TextInputProps) => {
  return (
    <label htmlFor={name} className="flex flex-col gap-2">
      <TextElement className="font-semibold">{label}</TextElement>
      <TextInputElement.Root>
        {icon && <TextInputElement.Icon>{icon}</TextInputElement.Icon>}
        <TextInputElement.Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          register={register}
        />
      </TextInputElement.Root>
      <TextElement className="text-red-400 px-2" size="sm">
        {helperText}
      </TextElement>
    </label>
  );
};
