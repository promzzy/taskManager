import { FC } from "react";
import TaskRow from "../../components/TaskRow";
import TaskTable from "../../components/TaskTable";
import TeamSlide from "../../components/TeamSlide";
import useTaskboard from "./hooks/useTaskboard";
import classes from './Taskboard.module.css'
import { TaskBoardProps } from "./types";

const Taskboard: FC<TaskBoardProps> = ({
  myTeam = [],
  task = []
}) => {
  const { viewPort, handleEditTask, createTask, addMember, editMember } = useTaskboard()


  return (<div className={classes.boardRoot}>
    <TeamSlide
      teamName='PromzzyTech'
      onAddMember={addMember}
      onViewMember={editMember}
      teamMembers={myTeam}
     />
     <div style={{marginTop: 20}}>
      <TaskTable
        className={classes.taskTable}
        tableTitl="upcoming"
        onClick={handleEditTask}
        createTaskClick={createTask}
        title="Fix personal performance"
        assigneeIcon=""
        dueDate="2017-02-23"
        assigneeFirstName = "promise"
        assigneeLastName = "stephen"
        taskOptions={task}
       />

      <div className={classes.taskMobileScrren}>
        {
         task.map((item) =>(
                <TaskRow
                  onClick={() => handleEditTask(item.id) }
                  className={classes.taskRowCard}
                  title={item.title}
                  description=''
                  status={item.status}
                  category=""
                  date={item.createdAt}
                  firstName={item.assignee.firstName}
                  lastName={item.assignee.lastName}
                />
              ))
           } </div>

     </div>
  </div>)
}

export default Taskboard;
