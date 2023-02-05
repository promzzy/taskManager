import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setTask, setTeamMember, setUserData } from "../../redux/features/userSlice"
import authService from "../../services/auth.service"
import { errorCatch, userInfo } from "../types"

function useAuth(){

  const reduxDispatch = useDispatch()
  const history = useNavigate()

  function logOut(){
    reduxDispatch(setUserData(null))
      history('/')
  }

   function login({
    email,
    password,
  }: { email: string, password: string }) {

     const users: any = authService.onLogin()
      users.then(({USER}: any) => {
        const logedInUser = USER.find((item: userInfo) => item.email === email && item.password === password)
        if(logedInUser){
          reduxDispatch(setUserData(logedInUser))
           reduxDispatch(setTask(logedInUser?.task || []));
           reduxDispatch(setTeamMember(logedInUser?.team || []))
          history('/dashboard')
          return
        }

        alert('invalid email or password')
      })
      .catch(({message}: errorCatch) => {alert(message)});

  }

  return { logOut, login }
}

export default useAuth