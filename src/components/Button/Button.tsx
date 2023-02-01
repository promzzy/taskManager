import { FC } from "react";
import classes from './Button.module.css';
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  onClick,
}) => {
  return(
    <button onClick={onClick} type={type} className={`${classes.button} ${className}`}>
      {children}
    </button>
  )
}

export default Button;
