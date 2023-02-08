import { Reducer, useEffect, useMemo, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { toast } from 'react-toastify'
import { RootState } from "../../../redux/types";
import taskService from "../../../services/task.service";
import { TaskProps, userInfo } from "../../../utils/types";
import { HooksProps, ReducerProps } from "../types";
import { useLocation, useParams } from "react-router-dom";
import useAuth from "../../../utils/hooks/useAuth";
import { setIsLoading } from "../../../redux/features/appSlice";

function useManageTask({
  isEdit,
  onClose,
}: HooksProps){

  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const statusType = query.get('type')
  const reduxDispatch = useDispatch()

    const { currentUser, task, team }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
  const { getUserData } = useAuth();
const {taskId} = useParams()
  const initialState = {
  title: '',
  assignee: {firstName: '', lastName: '',},
  dueDate: '',
  status: '',
  priority: '',
  description: '',
  }



  const [state, dispatch] = useReducer<Reducer<ReducerProps, any>>((stateVal, value) => ({...stateVal, ...value}), initialState)


    const allMembers = useMemo(() => team.map((item: userInfo) => ({...item, name: `${item.firstName} ${item.lastName}`})), [team])

   // update state on first load
   useEffect(() => {
    if (!isEdit) {
      dispatch({
          title: '',
          assignee: null,
          dueDate: '',
          createdAt: moment(),
          status: statusType || '',
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
  dueDate: findselectedTask?.dueDate,
  createdAt: findselectedTask?.createdAt || moment(),
  status: findselectedTask?.status,
  description: findselectedTask?.description,
  priority: findselectedTask?.priority,
    });
  }, [isEdit, taskId, statusType]); // eslint-disable-line

// FUNCTION FOR CREATING AND UPDATE TASK
  function createTask(){
      if(!state.title){
        toast.error('Task title is cannot be empty')
        return;
      }
    const oldTask = (task || []).filter((item: userInfo) => item.id !== Number(taskId));
    const newTask = [
      ...oldTask,
      { ...state, id: Number(taskId) || oldTask?.length + 1 },
    ];
reduxDispatch(setIsLoading(true))
setTimeout(() => {
        const addTask: any = taskService.createTask({
           ...currentUser,
      task: newTask,
      })
      addTask.then(() => {
        getUserData()
        onClose?.()
        toast.success('Saved Successfully')
      })
      .finally(()=> {
        reduxDispatch(setIsLoading(false))
      })
}, 1500);
    }



  return{
    state,
    allMembers,
    dispatch,
    createTask,
  }
}

export default useManageTask;