import { FC } from "react";
import { colorsGenerator, sentenceCase } from "../../utils/helpers";
import ProfileIcon from "../ProfileIcon";
import classes from "./TaskRow.module.css";
import { TaskRowProps } from "./types";
import deleteIcon from "../../assets/svg/icon-delete.svg";

const TaskRow: FC<TaskRowProps> = ({
  title,
  status,
  date,
  firstName,
  lastName,
  className,
  priority,
  onClick,
  onDelete,
}) => {
  return (
    <div onClick={onClick} className={`${classes.taskRowRoot} ${className}`}>
      <div className={classes.cardLeft}>
        <h4 className={classes.taskTitle}>{title}</h4>
        <div className={classes.cardDate}>{date}</div>
      </div>
      <div className={classes.middleBox}>
      <ProfileIcon
        className={classes.profileIcon}
        firstName={firstName}
        lastName={lastName}
      />
      <button
      className={classes.priorityText}
        style={{
          backgroundColor: colorsGenerator(priority),
          color: priority === 'LOW' ? '#011B60' : undefined
        }}
      >{sentenceCase(priority)}</button>
      </div>
      <div className={classes.cardRight}>
        <button
          className={classes.taskStatus}
          style={{ backgroundColor: colorsGenerator(status) }}
        >
          {sentenceCase(status)}
        </button>
       {onDelete && <button
          className={classes.deleteBtn}
          onClick={(e) => {
            e.stopPropagation();
            onDelete()
          }}
        >
          <img src={deleteIcon} alt="" height="18px" />
        </button>}
      </div>
    </div>
  );
};

export default TaskRow;
