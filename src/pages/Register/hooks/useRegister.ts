import { Reducer, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";
import {RegisterStateProps, RegisterDispatcher} from '../types'

function useRegister(){
    const history = useNavigate();

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
   await authService.onRegister({
         firstName,
        lastName,
        email,
        password,
        phoneNumber,
    })

}
 return{
    state,
    dispatch,
    history,
    handleRegister
 }
}

export default useRegister;