import { FC } from "react";
import { TextAreaProps } from "./types";
import classes from './TextArea.module.css';

const TextArea: FC<TextAreaProps> = ({
  label,
  rows = 4,
  className,
  placeholder,
}) => {
  return(
    <div className={classes.textAreaWrap}>
      <label htmlFor="" className={classes.textAreaLabel}>{label}</label>
      <textarea placeholder={placeholder} rows={rows} className={`${classes.textInput} ${className}`}>

      </textarea>
    </div>
  )
}

export default TextArea;