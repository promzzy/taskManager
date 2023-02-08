import { FC } from "react";
import { colorsGenerator, dateFormate, sentenceCase } from "../../utils/helpers";
import ProfileIcon from "../ProfileIcon";
import classes from './TaskTable.module.css';
import { TaskTableProps } from "./types";
import deleteIcon from '../../assets/svg/icon-delete.svg'

const TaskTable: FC<TaskTableProps> = ({
  assigneeIcon,
  taskOptions = [],
  tableTitl,
  onClick,
  createTaskClick,
  className,
  onDelete,
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
          <th>Due Date</th>
          <th>PRIORITY</th>
          <th>STATUS</th>
          <th></th>
      </thead>
      <tbody className={classes.tableBody}>
        {taskOptions.map(({id, createdAt, dueDate, title, assignee, priority, status}) =>(
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
            <td>{dateFormate(dueDate)}</td>
            <td>
              <button className={classes.priorityText}
              style={{
                backgroundColor: colorsGenerator(priority),
                color: priority === 'LOW' ? '#011B60' : undefined
                }}>
                {sentenceCase(priority)}</button>
            </td>
            <td>
              <button className={classes.taskStatus} style={{backgroundColor: colorsGenerator(status)}}>{sentenceCase(status)}</button>
            </td>
            <td>
              <button
              className={classes.deleteBtn}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id)
              }}
              >
                <img src={deleteIcon} alt='' height="18px" />
              </button>
            </td>
          </tr>
        ))}
        </tbody>
    </table>
      {/* <button onClick={createTaskClick} className={classes.newTaskBtn}>+ New task</button> */}
  </div>
  )
}

export default TaskTable;
