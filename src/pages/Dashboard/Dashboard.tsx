import { FC } from "react";
import InfoCard from "../../components/InfoCard";
import classes from "./Dashboard.module.css";
import todoIcon from "../../assets/png/todo icon.png";
import inProgress from "../../assets/png/inProgress.png";
import completedIcon from "../../assets/png/completed icon.png";
import TaskRow from "../../components/TaskRow";
import { DashboardProps } from "./types";
import { TaskProps } from "../../utils/types";
import { dateFormate, whichHour } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import moment from "moment";

const Dashboard: FC<DashboardProps> = ({ currentUser, task = [] }) => {
  const history = useNavigate();

  // FILTER TASK BY STATUS
  const taskByStatus = (status: string) =>
    task?.filter((item: TaskProps) => item.status === status);

  // FILTER TASK WITH CURRENT DATE
  const dueToday = task?.filter(
    (item: TaskProps) =>
      moment(item.dueDate).format("YYYY-MM-DD") ===
      moment().format("YYYY-MM-DD")
  );

  // FILTER TASK BY PRIORITY
  const newTaskArry = (type: string) =>
    task?.filter((item: TaskProps) => item.priority === type);

  return (
    <div className={classes.dashboardRoot}>
      <div>
        <div className={classes.userName}>{`Good ${whichHour()} ${
          currentUser?.firstName
        }`}</div>
        <div className={classes.wlcBack}>Welcome Back 👋🏽</div>
      </div>
      <p className={classes.dashboardBody}>
        <div className={classes.leftBodySection}>
          <div className={classes.taskGroupings}>
            <InfoCard
              title="Upcoming"
              icon={<img src={todoIcon} alt="" />}
              description={`${taskByStatus("UPCOMING")?.length} Task Remaining`}
              onClick={() => {
                history(`${paths.dashboardCreateTask}?type=UPCOMING`);
              }}
              className={classes.todoTasks}
            />
            <InfoCard
              title="In Progress"
              icon={<img src={inProgress} alt="" />}
              description={`${
                taskByStatus("INPROGRESS")?.length
              } Task in progress`}
              onClick={() => {
                history(`${paths.dashboardCreateTask}?type=INPROGRESS`);
              }}
              className={classes.inProgress}
            />
            <InfoCard
              title="Completed"
              icon={<img src={completedIcon} alt="" />}
              description={`${
                taskByStatus("COMPLETED")?.length
              } Task completed`}
              onClick={() => {
                history(`${paths.dashboardCreateTask}?type=COMPLETED`);
              }}
              className={classes.completed}
            />
          </div>
          <div>
            <h3 className={classes.sectionTitle}>Today Tasks</h3>
            {dueToday.length ? (
              <div>
                {dueToday.map((item) => (
                  <TaskRow
                    title={item.title}
                    status={item.status}
                    priority={item.priority}
                    date={dateFormate(item.createdAt)}
                    firstName={item?.assignee?.firstName}
                    lastName={item?.assignee?.lastName}
                  />
                ))}{" "}
              </div>
            ) : (
              <div className={classes.noTaskNotice}>
                <h3>No Task For Today</h3>
              </div>
            )}
          </div>
        </div>
        <div className={classes.rightBodySection}>
          <InfoCard
            title="Urgent"
            description={`${
              newTaskArry("URGENT")?.length
            } Urgent Priority Task Available `}
            className={classes.taskBreakdown}
          />
          <InfoCard
            title="High"
            description={`${
              newTaskArry("HIGH")?.length
            } High Priority Task Available`}
            className={classes.taskBreakdown}
          />
          <InfoCard
            title="Normal"
            description={`${
              newTaskArry("NORMAL")?.length
            } Normal Priority Task Available`}
            className={classes.taskBreakdown}
          />
          <InfoCard
            title="Low"
            description={`${
              newTaskArry("LOW")?.length
            } Low Priority Task Available`}
            className={classes.taskBreakdown}
          />
        </div>
      </p>
    </div>
  );
};

export default Dashboard;
