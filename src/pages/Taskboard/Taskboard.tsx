import { FC } from "react";
import TaskTable from "../../components/TaskTable";
import TeamSlide from "../../components/TeamSlide";
import useTaskboard from "./hooks/useTaskboard";
import classes from './Taskboard.module.css'
import { TaskBoardProps } from "./types";

const Taskboard: FC<TaskBoardProps> = () => {
  const { handleEditTask, createTask, addMember, editMember } = useTaskboard()



  return (<div className={classes.boardRoot}>
    <TeamSlide
      teamName='PromzzyTech'
      onAddMember={addMember}
      onViewMember={editMember}
      teamMembers={[1,2,3,4,,5]}
     />
     <div>
      <TaskTable
        tableTitl="upcoming"
        onClick={handleEditTask}
        createTaskClick={createTask}
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
