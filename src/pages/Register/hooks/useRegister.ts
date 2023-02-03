import { Reducer, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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

 return{
    state,
    dispatch,
    history,
 }
}

export default useRegister;