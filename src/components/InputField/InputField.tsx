import { FC } from "react";
import classes from './InputField.module.css'
import { InputFieldProps } from "./types";

const InputField: FC<InputFieldProps> = ({
  className,
  onChange,
  value,
  placeholder,
  ...props
}) => {
  return(
    <input
    className={`${classes.inputField} ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    { ...props }
    />
  )
}

export default InputField;