import { FC } from "react";
import ProfileIcon from "../ProfileIcon";
import classes from './TaskRow.module.css'
import { TaskRowProps } from "./types";

const TaskRow: FC<TaskRowProps> = ({
  title,
  description,
  status,
  date,
  firstName,
  lastName,
  className,
  onClick,
}) => {



  return(<div onClick={onClick} className={`${classes.taskRowRoot} ${className}`}>
   <div className={classes.cardLeft}>
     <h4 className={classes.taskTitle}>{title}</h4>
    <div className={classes.taskDesc}>{description}</div>
   </div>
   <ProfileIcon
      className={classes.profileIcon}
      firstName={firstName}
      lastName={lastName}
    />
   <div className={classes.cardRight}>
    <button className={`${classes.taskStatus} ${classes[status]}`}>{status}</button>
    <div className={classes.cardDate}>{date}</div>
   </div>
  </div>)
}

export default TaskRow