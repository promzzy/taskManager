import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify'
import { setIsLoading } from "../../../redux/features/appSlice";
import authService from "../../../services/auth.service";
import { userInfo } from "../../../utils/types";

function useForgotPassword(){
  const reduxDispatch = useDispatch()
const [email, setEmail] = useState<string>('')

  function getUserData(){
    if(!email){
      toast.error('Email required')
      return;
    }
    reduxDispatch(setIsLoading(true))
    setTimeout(() => {
           const users: any = authService.onLogin()
      users.then(({USER}: any) => {
        const logedInUser = USER.find((item: userInfo) => item.email === email)
        if(logedInUser){
          toast.success('Successfully sent')
          return
        }
        toast.error('user does not exist')
      })
      .finally(() =>{
        reduxDispatch(setIsLoading(false))
      })
    }, 1500);
  }

return{
  email,
  setEmail,
  getUserData,
}
}

export default useForgotPassword;