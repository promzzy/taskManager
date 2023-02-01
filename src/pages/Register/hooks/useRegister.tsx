import { useNavigate } from "react-router-dom";

function useRegister(){
    const history = useNavigate();
 return{
  history
 }
}

export default useRegister;