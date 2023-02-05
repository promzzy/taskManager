import { FC } from "react";
import ProfileIcon from "../ProfileIcon";
import classes from './TaskTable.module.css';
import { TaskTableProps } from "./types";

const TaskTable: FC<TaskTableProps> = ({
  assigneeIcon,
  dueDate,
  taskOptions = [],
  tableTitl,
  onClick,
  createTaskClick,
  className,
}) => {
  return(
  <div className={`${classes.rowRoot} ${className}`}>
    <table width="100%">
      <thead>
          <th className={classes.theadTitle}>
            <span className={`${classes.taskLabel} ${classes[tableTitl]}`}>{tableTitl}</span>
            <span>{`${taskOptions?.length} TASKS`}</span>
            </th>
          <th>ASSIGNEE</th>
          <th>CREATED AT</th>
          <th>PRIORITY</th>
          <th>STATUS</th>
          <th></th>
      </thead>
      <tbody className={classes.tableBody}>
        {taskOptions.map(({id, title, assignee, priority, status}) =>(
          <tr onClick={() => onClick(id)} className={classes.tableRow}>
            <td>
              <div className={classes.taskColumn}>
              <input checked value="" type="checkbox" />
              <span className={classes.taskTitle}>{title}</span>
              </div>
            </td>
            <td>
              <ProfileIcon
                image=''
                firstName={assignee?.firstName || '-'}
                lastName={assignee?.lastName || '-'}
               />
            </td>
            <td>{dueDate}</td>
            <td>{priority}</td>
            <td>{status}</td>
            <td>delete</td>
          </tr>
        ))}
        </tbody>
    </table>
      <button onClick={createTaskClick} className={classes.newTaskBtn}>+ New task</button>
  </div>
  )
}

export default TaskTable;
