import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTask } from "../../../redux/features/userSlice";
import { RootState } from "../../../redux/types";
import { paths } from "../../../routes/paths";
import authService from "../../../services/auth.service";
import taskService from "../../../services/task.service";
import useAuth from "../../../utils/hooks/useAuth";
import { TaskProps, userInfo } from "../../../utils/types";

function useTaskboard() {
  const history = useNavigate();

  const { currentUser, task }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
  const reduxDispatch = useDispatch();
  const { getUserData } = useAuth()

  useEffect(() => {
    const users: any = authService.onLogin();
    users.then(({ USER }: any) => {
      const logedInUser = USER.find(
        (item: userInfo) => item.id === currentUser.id
      );
      reduxDispatch(setTask(logedInUser?.task || []));
    });
  }, []); // eslint-disable-line

  function handleEditTask(id?: number) {
    history(paths.editTask.replace(":taskId", `${id}`));
  }

  function createTask() {
    history(paths.createTask);
  }

  function addMember() {
    history(paths.taskAddMember);
  }

  function editMember(id?: number) {
    history(paths.taskEditMember.replace(":memberId", `${id}`));
  }

  function deleteTask(id?: number) {
    const remvoveById = task.filter((item: TaskProps) => item.id !== id);

    const service: any = taskService.createTask({
      ...currentUser,
      task: remvoveById,
    });
    service.then(() => {
      getUserData();
    });
  }

  return {
    handleEditTask,
    createTask,
    addMember,
    editMember,
    deleteTask,
  };
}

export default useTaskboard;
