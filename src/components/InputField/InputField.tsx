import { FC, useState } from "react";
import classes from './InputField.module.css'
import { InputFieldProps } from "./types";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";


const InputField: FC<InputFieldProps> = ({
  className,
  onChange,
  value,
  placeholder,
  endIcon,
  type,
  password,
  name,
  ...props
}) => {
  const [showPassword, setShowPasssword] = useState(false)
  return(
   <div className={classes.inputWrapper}>
    <input
    type={showPassword ? 'text' : type}
    className={`${classes.inputField} ${className}`}
    value={value}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    { ...props }
    />
    {type === 'password'  && <span onClick={() => setShowPasssword(!showPassword)} className={classes.passwordEndIcon}>{
      showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
      }</span>}
   </div>
  )
}

export default InputField;