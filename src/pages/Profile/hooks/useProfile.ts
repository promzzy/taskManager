import { Reducer, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import authService from "../../../services/auth.service";
import useAuth from "../../../utils/hooks/useAuth";
import { ReducerState } from "../types";

function useProfile(){

  const { getUserData } = useAuth()

const { currentUser }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
    const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  };
  const [state, dispatch] = useReducer<Reducer<ReducerState, any>>(
    (intialState, value) => ({ ...intialState, ...value }),
    initialState
  );

  useEffect(() => {
    dispatch(currentUser)
  }, [currentUser])
  function onUpdateProfile(){
        const addTask: any = authService.updateProfile({
           ...currentUser, ...state
      })

      addTask.then(() => {
        getUserData()
        alert('saved successfully')
      })
  }

  return{ state, dispatch, onUpdateProfile}
}


export default useProfile;