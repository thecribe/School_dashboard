import React from "react";
import { FieldError } from "react-hook-form";

const InputForm = ({
  type,
  label,
  register,
  defaultValue,
  error,
  inputProps,
}: {
  type: string;
  label: string;
  defaultValue?: string;
  register: any;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <div className="w-full flex flex-col gap-2 ">
      <label className="text-xs text-gray-500 font-semibold">{label}:</label>
      <input
        type={type}
        {...register}
        defaultValue={defaultValue}
        {...inputProps}
        className="outline-none border-2 border-gray-200 py-1 rounded-md text-xs "
      />
      {error?.message && (
        <p className="text-red-400 text-xs">{error?.message.toString()}</p>
      )}
    </div>
  );
};

export default InputForm;
