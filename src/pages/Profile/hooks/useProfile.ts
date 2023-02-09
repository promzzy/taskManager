import { Reducer, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { setIsLoading } from "../../../redux/features/appSlice";
import { RootState } from "../../../redux/types";
import authService from "../../../services/auth.service";
import useAuth from "../../../utils/hooks/useAuth";
import { ReducerState } from "../types";

function useProfile(){

  const { getUserData } = useAuth()
  const reduxDispatch = useDispatch();

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
    reduxDispatch(setIsLoading(true))
setTimeout(() => {
          const addTask: any = authService.updateProfile({
           ...currentUser, ...state
      })

      addTask.then(() => {
        getUserData()
        toast.success('saved successfully')
      })
      .finally(() => {
        reduxDispatch(setIsLoading(false))
      })
}, 1500);
  }

  return{ state, dispatch, onUpdateProfile}
}


export default useProfile;