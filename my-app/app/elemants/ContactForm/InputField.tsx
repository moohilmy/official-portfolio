import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type IInputProps<TFieldValue extends FieldValues> = {
  label: string;
  error?: string;
  placeholderField: string;
  register: UseFormRegister<TFieldValue>;
  name: Path<TFieldValue>;
};

const InputField = <TFieldValue extends FieldValues>({
  label,
  error,
  placeholderField,
  name,
  register,
}: IInputProps<TFieldValue>) => {
  return (
    <div className="w-full mb-3">
      <div className="flex mb-2 capitalize justify-between">
        <label htmlFor={name}>{label}</label>
        <span className="text-red-600 text-xs">{error}</span>
      </div>
      <input
        className="w-full px-4 py-2 rounded outline-secondaryColor"
        type="text"
        {...register(name)}
        id={name}
        placeholder={placeholderField}
      />
    </div>
  );
};

export default InputField;
