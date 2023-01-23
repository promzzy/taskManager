import { FC } from "react";
import classes from './TaskRow.module.css'
import { TaskRowProps } from "./types";

const TaskRow: FC<TaskRowProps> = ({
  title,
  description,
  status,
  date,
}) => {



  return(<div className={classes.taskRowRoot}>
   <div className={classes.cardLeft}>
     <h4 className={classes.taskTitle}>{title}</h4>
    <div className={classes.taskDesc}>{description}</div>
   </div>
   <div className={classes.cardRight}>
    <button className={`${classes.taskStatus} ${classes[status]}`}>{status}</button>
    <div className={classes.cardDate}>{date}</div>
   </div>
  </div>)
}

export default TaskRow