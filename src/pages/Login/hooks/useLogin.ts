import { useNavigate } from "react-router-dom";

function useLogin(){
  const history = useNavigate();

  return {
    history,
  }
}

export default useLogin;
