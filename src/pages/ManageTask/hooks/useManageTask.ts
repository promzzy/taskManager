import { Reducer, useEffect, useMemo, useReducer } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import taskService from "../../../services/task.service";
import { TaskProps, userInfo } from "../../../utils/types";
import { HooksProps, ReducerProps } from "../types";
import { useParams } from "react-router-dom";
import moment from "moment";
import useAuth from "../../../utils/hooks/useAuth";

function useManageTask({
  isEdit,
  onClose,
}: HooksProps){

    const { currentUser, task, team }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
  const { getUserData } = useAuth();
const {taskId} = useParams()
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

   useEffect(() => {
    if (!isEdit) {
      dispatch({
          title: '',
          assignee: null,
          dueDate: '',
          createdAt: moment(),
          status: '',
          priority: '',
        description: '',
      })
      return;
    };
    const findselectedTask = task.find(
      (item: TaskProps) => item.id === Number(taskId))
    dispatch({
      ...findselectedTask,
  title: findselectedTask?.title,
  assignee: findselectedTask?.assignee,
  dueDate: '',
  createdAt: findselectedTask?.createdAt || moment(),
  status: findselectedTask?.status,
  description: findselectedTask?.description,
    });
  }, [isEdit, taskId]); // eslint-disable-line

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