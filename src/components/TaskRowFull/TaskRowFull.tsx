import { FC } from "react";
import ProfileIcon from "../ProfileIcon";
import classes from './TaskRowFull.module.css';
import { TaskTableProps } from "./types";

const TaskRowFull: FC<TaskTableProps> = ({
  title,
  assigneeIcon,
  dueDate,
  assigneeFirstName = "",
  assigneeLastName = "",
  taskOptions = [],
  onClick,
}) => {
  return(
  <div className={classes.rowRoot}>
    <table width="100%">
      <thead>
          <td>TASKS</td>
          <td>ASSIGNEE</td>
          <td>DUE DATE</td>
          <td>PRIORITY</td>
          <td>STATUS</td>
          <td></td>
      </thead>
      <tbody className={classes.tableBody}>
        {taskOptions.map(_ =>(
          <tr onClick={onClick} className={classes.tableRow}>
            <td>
              <div className={classes.taskColumn}>
              <input checked value="" type="checkbox" />
              <span className={classes.taskTitle}>{title}</span>
              </div>
            </td>
            <td>
              <ProfileIcon
                image={assigneeIcon}
                firstName={assigneeFirstName}
                lastName={assigneeLastName}
               />
            </td>
            <td>{dueDate}</td>
            <td>date</td>
            <td>date</td>
            <td>date</td>
          </tr>
        ))}
        </tbody>
    </table>
  </div>
  )
}

export default TaskRowFull;
