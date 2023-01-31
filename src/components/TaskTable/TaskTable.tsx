import { FC } from "react";
import ProfileIcon from "../ProfileIcon";
import classes from './TaskTable.module.css';
import { TaskTableProps } from "./types";

const TaskTable: FC<TaskTableProps> = ({
  title,
  assigneeIcon,
  dueDate,
  assigneeFirstName = "",
  assigneeLastName = "",
  taskOptions = [],
  tableTitl,
  onClick,
  createTaskClick,
}) => {
  return(
  <div className={classes.rowRoot}>
    <table width="100%">
      <thead>
          <th className={classes.theadTitle}>
            <span className={`${classes.taskLabel} ${classes[tableTitl]}`}>{tableTitl}</span>
            <span>{`${taskOptions?.length} TASKS`}</span>
            </th>
          <th>ASSIGNEE</th>
          <th>DUE DATE</th>
          <th>PRIORITY</th>
          <th>STATUS</th>
          <th></th>
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
      <button onClick={createTaskClick} className={classes.newTaskBtn}>+ New task</button>
  </div>
  )
}

export default TaskTable;
