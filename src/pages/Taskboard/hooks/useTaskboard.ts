import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTask } from "../../../redux/features/userSlice";
import { RootState } from "../../../redux/types";
import { paths } from "../../../routes/paths";
import authService from "../../../services/auth.service";
import { userInfo } from "../../../utils/types";

function useTaskboard(){
  const history = useNavigate()
const [viewPort, setViewPort] = useState<SetStateAction<number>>(0);

     const { currentUser }: any = useSelector((reduxState: RootState) => reduxState.user)
    const reduxDispatch = useDispatch()


     useEffect(() => {
    window.addEventListener("resize", () => {
       setViewPort(window.innerWidth)

    })
},[window.innerWidth]);

     useEffect(() => {
     const users: any = authService.onLogin()
      users.then(({USER}: any) => {
        const logedInUser = USER.find((item: userInfo) => item.id === currentUser.id)
          reduxDispatch(setTask(logedInUser?.task || []))
      })
  }, [])

    function handleEditTask(id?: number,){
    history(paths.editTask.replace(':taskId', `${id}`))
  }

    function createTask(){
    history(paths.createTask)
  }

  function addMember(){
    history(paths.taskAddMember)
  }

      function editMember(id?: number){
    history(paths.taskEditMember.replace(':memberId', `${id}`))
  }


  return{
    viewPort,
    handleEditTask,
    createTask,
    addMember,
    editMember,
  }
}

export default useTaskboard;