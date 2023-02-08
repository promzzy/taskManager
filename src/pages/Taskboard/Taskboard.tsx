import { FC } from "react";
import TaskRow from "../../components/TaskRow";
import TaskTable from "../../components/TaskTable";
import TeamSlide from "../../components/TeamSlide";
import { dateFormate } from "../../utils/helpers";
import useTaskboard from "./hooks/useTaskboard";
import classes from './Taskboard.module.css'
import { TaskBoardProps } from "./types";

const Taskboard: FC<TaskBoardProps> = ({
  myTeam = [],
  task = []
}) => {
  const { handleEditTask, createTask, addMember, editMember, deleteTask } = useTaskboard()


  return (<div className={classes.boardRoot}>
    <TeamSlide
      teamName='Task Board'
      onAddMember={addMember}
      onViewMember={editMember}
      teamMembers={myTeam}
     />
    { task.length ? <div style={{marginTop: 20}}>
      <TaskTable
        className={classes.taskTable}
        tableTitl="upcoming"
        onClick={handleEditTask}
        createTaskClick={createTask}
        assigneeIcon=""
        taskOptions={task}
        onDelete={deleteTask}
       />

      <div className={classes.taskMobileScrren}>
        {
         task.map((item) =>(
                <TaskRow
                  onClick={() => handleEditTask(item.id) }
                  className={classes.taskRowCard}
                  title={item.title}
                  status={item.status}
                  priority={item.priority}
                  date={dateFormate(item.dueDate)}
                  firstName={item.assignee?.firstName}
                  lastName={item.assignee?.lastName}
                  onDelete={() => deleteTask(item.id)}
                />
              ))
           }
           </div>

     </div>
     :
     <div className={classes.emptyList}>
      <h3>No Task Was Created</h3>
     </div>
     }
   <button onClick={createTask} className={classes.newTaskBtn}>+ New task</button>

  </div>)
}

export default Taskboard;
