import { useNavigate } from "react-router-dom";
import { paths } from "../../../routes/paths";

function useTaskboard(){
  const history = useNavigate()


    function handleEditTask(){
    history(paths.editTask.replace(':taskId', `${9}`))
  }

    function createTask(){
    history(paths.createTask)
  }

  function addMember(){
    history(paths.taskAddMember)
  }

      function editMember(){
    history(paths.taskEditMember.replace(':memberId', `${9}`))
  }


  return{
    handleEditTask,
    createTask,
    addMember,
    editMember,
  }
}

export default useTaskboard;