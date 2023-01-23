import { FC } from "react";
import InfoCard from "../../components/InfoCard";
import classes from './Dashboard.module.css';
import todoIcon from '../../assets/png/todo icon.png'
import inProgress from '../../assets/png/inProgress.png'
import completedIcon from '../../assets/png/completed icon.png'
import TaskRow from "../../components/TaskRow";

const Dashboard: FC = () => {
  const name: string = 'Promise'
  return (
    <div className={classes.dashboardRoot}>
      <div>
        <div className={classes.userName}>{`Hi ${name}`}</div>
        <div className={classes.wlcBack}>Welcome Back 👋🏽</div>
      </div>
      <p className={classes.dashboardBody}>
        <div className={classes.leftBodySection}>
          <div className={classes.taskGroupings}>
            <InfoCard
            title="Upcoming"
            icon={(<img src={todoIcon} alt="" />)}
            description={`${10} Task Remaining`}
            onClick={() => {}}
            className={classes.todoTasks}
             />
            <InfoCard
             title="In Progress"
             icon={(<img src={inProgress} alt="" />)}
             description={`${1} Task in progress`}
             onClick={() => {}}
              className={classes.inProgress}
               />
            <InfoCard
            title="Completed"
             icon={(<img src={completedIcon} alt="" />)}
            description={`${5} Task completed`}
            onClick={() => {}}
            className={classes.completed}
             />
          </div>
          <div>
            <h3 className={classes.sectionTitle}>Today Tasks</h3>
            <div>{
              [1,2,3].map(_ =>(
                <TaskRow
                  title="go to school today"
                  description="test description"
                  status="upcoming"
                  category=""
                  date='7/23/2022'
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
