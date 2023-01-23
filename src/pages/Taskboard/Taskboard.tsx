import { FC } from "react";
import TaskRowFull from "../../components/TaskRowFull";
import TeamSlide from "../../components/TeamSlide";
import classes from './Taskboard.module.css'
import { TaskBoardProps } from "./types";

const Taskboard: FC<TaskBoardProps> = ({
  showPopup,
}) => {
  return (<div className={classes.boardRoot}>
    <TeamSlide
      teamName='PromzzyTech'
     />
     <div>
      <TaskRowFull
        onClick={() => showPopup(true)}
        title="Fix personal performance"
        assigneeIcon=""
        dueDate="2017-02-23"
        assigneeFirstName = "promise"
        assigneeLastName = "stephen"
        taskOptions={[1,2,3,4,5]}
       />
     </div>
  </div>)
}

export default Taskboard;
