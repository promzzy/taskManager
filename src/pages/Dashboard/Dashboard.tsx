import { FC } from "react";
import InfoCard from "../../components/InfoCard";
import classes from './Dashboard.module.css';
import todoIcon from '../../assets/png/todo icon.png'
import inProgress from '../../assets/png/inProgress.png'
import completedIcon from '../../assets/png/completed icon.png'
import TaskRow from "../../components/TaskRow";
import { DashboardProps } from "./types";
import { TaskProps } from "../../utils/types";
import { dateFormate, whichHour } from "../../utils/helpers";

const Dashboard: FC<DashboardProps> = ({
  currentUser,
  task = [],
}) => {
  const upcomingTask: TaskProps[] = task?.filter((item: TaskProps) => item.status === 'UPCOMING')
  const inProgressTask: TaskProps[] = task?.filter((item: TaskProps) => item.status === 'INPROGRESS')
  const completedTask: TaskProps[] = task?.filter((item: TaskProps) => item.status === 'COMPLETED')
  return (
    <div className={classes.dashboardRoot}>
      <div>
        <div className={classes.userName}>{`Good ${whichHour()} ${currentUser?.firstName}`}</div>
        <div className={classes.wlcBack}>Welcome Back 👋🏽</div>
      </div>
      <p className={classes.dashboardBody}>
        <div className={classes.leftBodySection}>
          <div className={classes.taskGroupings}>
            <InfoCard
            title="Upcoming"
            icon={(<img src={todoIcon} alt="" />)}
            description={`${upcomingTask?.length} Task Remaining`}
            onClick={() => {}}
            className={classes.todoTasks}
             />
            <InfoCard
             title="In Progress"
             icon={(<img src={inProgress} alt="" />)}
             description={`${inProgressTask.length} Task in progress`}
             onClick={() => {}}
              className={classes.inProgress}
               />
            <InfoCard
            title="Completed"
             icon={(<img src={completedIcon} alt="" />)}
            description={`${completedTask.length} Task completed`}
            onClick={() => {}}
            className={classes.completed}
             />
          </div>
          <div>
            <h3 className={classes.sectionTitle}>Today Tasks</h3>
            <div>{
              task.map((item) =>(
                <TaskRow
                  title={item.title}
                  description={item.description}
                  status={item.status}
                  category=""
                  date={dateFormate(item.createdAt)}
                  firstName={item.assignee.firstName}
                  lastName={item.assignee.lastName}
                />
              ))
           } </div>
          </div>
        </div>
        <div className={classes.rightBodySection}></div>
      </p>
    </div>
  )
}

export default Dashboard;
