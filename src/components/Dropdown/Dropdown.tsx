import { FC } from "react";
import { DropdownProps } from "./types";
import classes from './Dropdown.module.css'

const Dropdown: FC<DropdownProps> = ({
  options = [],
  className,
  placeholder
}) => {
  return(
  <select
   name="cars"
    id="cars"
    className={`${classes.selector} ${className}`}
    placeholder={placeholder}
    >
  {
    options.map(option => (
      <option value="volvo">{option.name}</option>
    ))
  }
</select>
  )
}

export default Dropdown;
