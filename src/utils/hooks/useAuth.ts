import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setIsLoading } from "../../redux/features/appSlice"
import { setTask, setTeamMember, setUserData } from "../../redux/features/userSlice"
import { RootState } from "../../redux/types"
import authService from "../../services/auth.service"
import { errorCatch, userInfo } from "../types"
  import { toast } from 'react-toastify';


function useAuth(){
    const { currentUser }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
  const reduxDispatch = useDispatch()
  const history = useNavigate()

  // FUNCTION FOR LOGOUT
  function logOut(){
      reduxDispatch(setIsLoading(true))
    setTimeout(() => {
      reduxDispatch(setUserData(null))
      history('/')
      reduxDispatch(setIsLoading(false))
    }, 1000);
  }

  // FUNCTION FOR LOGIN
   function login({
    email,
    password,
  }: { email: string, password: string }) {
     if(!email) {
      toast.error("Email is required")
      return;
     }
     if(!password) {
      toast.error("Password is required")
      return;
     }
      reduxDispatch(setIsLoading(true))
    setTimeout(() => {
       const users: any = authService.onLogin()
      users.then(({USER}: any) => {
        const logedInUser = USER.find((item: userInfo) => item.email === email && item.password === password)
        if(logedInUser){
          reduxDispatch(setUserData(logedInUser))
           reduxDispatch(setTask(logedInUser?.task || []));
           reduxDispatch(setTeamMember(logedInUser?.team || []))
          history('/dashboard')
          toast.success('Logged in successfully')
          return
        }

        toast.error('invalid email or password')
      })
      .catch(({message}: errorCatch) => {toast.warning(message)})
      .finally(() => {
         reduxDispatch(setIsLoading(false))
      })
    }, 3000);

  }

  // FUNCTION TO REFETCH LOGED IN USER
  function getUserData(){
         const users: any = authService.onLogin()
      users.then(({USER}: any) => {
        const logedInUser = USER.find((item: userInfo) => item.id === currentUser.id)
          reduxDispatch(setUserData(logedInUser))
           reduxDispatch(setTask(logedInUser?.task || []));
           reduxDispatch(setTeamMember(logedInUser?.team || []))

      })
  }

  return { logOut, login, getUserData }
}

export default useAuth