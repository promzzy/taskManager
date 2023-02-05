import { FC } from "react";
import { DropdownProps } from "./types";
import classes from './Dropdown.module.css'

const Dropdown: FC<DropdownProps> = ({
  options = [],
  className,
  placeholder,
  name,
  value,
  onChange
}) => {
  return(
<div style={{width: '100%'}}>
  <label>{placeholder}</label>
    <select
   name={name}
    id="select"
    value={value}
    onChange={onChange}
    className={`${classes.selector} ${className}`}
    placeholder={placeholder}
    >
     <option value="none">Non</option>
  {
    options.map(option => (
      <option value={option.id}>{option.name}</option>
    ))
  }
</select>
</div>
  )
}

export default Dropdown;
