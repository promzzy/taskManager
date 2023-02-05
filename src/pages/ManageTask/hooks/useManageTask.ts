import { Reducer, useEffect, useMemo, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import taskService from "../../../services/task.service";
import { TaskProps, userInfo } from "../../../utils/types";
import { HooksProps, ReducerProps } from "../types";
import { setTask } from '../../../redux/features/userSlice'
import authService from "../../../services/auth.service";
import { useParams } from "react-router-dom";

function useManageTask({
  isEdit,
  onClose,
}: HooksProps){

    const { currentUser, task, team }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
const {taskId} = useParams()
  const reduxDispatch = useDispatch()
  const initialState = {
  title: '',
  assignee: null,
  dueDate: '',
  status: '',
  priority: '',
  description: '',
  }

  const allStatus = [
    {
    name: 'Upcoming',
    id: 'UPCOMING',
  },
    {
    name: 'Completed',
    id: 'COMPLETED',
  },
    {
    name: 'InProgress',
    id: 'INPROGRESS',
  },
]

  const [state, dispatch] = useReducer<Reducer<ReducerProps, any>>((stateVal, value) => ({...stateVal, ...value}), initialState)


    const allMembers = useMemo(() => team.map((item: userInfo) => ({...item, name: `${item.firstName} ${item.lastName}`})), [team])
  function getUserData() {
    const users: any = authService.onLogin();
    users.then(({ USER }: any) => {
      const logedInUser = USER.find(
        (item: userInfo) => item.id === currentUser.id
      );
      reduxDispatch(setTask(logedInUser?.task || []));
    });
  }

   useEffect(() => {
    if (!isEdit) {
      dispatch({
          title: '',
          assignee: null,
          dueDate: '',
        status: '',
          priority: '',
        description: '',
      })
      return;
    };
    const findselectedTask = task.find(
      (item: TaskProps) => item.id === Number(taskId))
    dispatch({
  title: findselectedTask?.title,
  assignee: findselectedTask?.assignee,
  dueDate: '',
  status: findselectedTask?.status,
  description: findselectedTask?.description,
    });
  }, [isEdit, taskId]);

    function createTask(){
    const oldTask = (task || []).filter((item: userInfo) => item.id !== Number(taskId));
    const newTask = [
      ...oldTask,
      { ...state, id: Number(taskId) || oldTask?.length + 1 },
    ];

      const addTask: any = taskService.createTask({
           ...currentUser,
      task: newTask,
      })

      addTask.then(() => {
        getUserData()
        onClose?.()
      })
    }



  return{
    state,
    allMembers,
    allStatus,
    dispatch,
    createTask,
  }
}

export default useManageTask;