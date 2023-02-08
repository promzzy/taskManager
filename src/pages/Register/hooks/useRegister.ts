import { Reducer, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setIsLoading } from "../../../redux/features/appSlice";
import authService from "../../../services/auth.service";
import {RegisterStateProps, RegisterDispatcher} from '../types'

function useRegister(){
    const history = useNavigate();
    const reduxDispatch = useDispatch()

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
    }

const [state, dispatch] = useReducer<Reducer<RegisterStateProps, RegisterDispatcher>>((stateValues, values) => ({ ...stateValues, ...values }), initialState);

const {
      firstName,
        lastName,
        email,
        password,
        phoneNumber,
} = state;
async function handleRegister(){
    if(!firstName){
        toast.error("Please enter first name")
        return;
    }
    if(!lastName){
        toast.error("Please enter last name")
        return;
    }
    if(!email){
        toast.error("Please enter email address")
        return;
    }
    if(!password){
        toast.error("Please enter password")
        return;
    }
 reduxDispatch(setIsLoading(true))
 setTimeout(() => {
      const onRegister: any = authService.onRegister({
         firstName,
        lastName,
        email,
        password,
        phoneNumber,
    })
onRegister.then(() => {
    toast.success('Account successfully created')
    history('/')
})
.catch(({message}: { message: string}) => {
    toast.error(message)
})
.finally(() =>{
    reduxDispatch(setIsLoading(false))
})
 }, 2000);
}
 return{
    state,
    dispatch,
    history,
    handleRegister
 }
}

export default useRegister;