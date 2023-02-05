import { Reducer, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { ReducerState } from "../types";

function useProfile(){
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
    dispatch({
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    email: currentUser?.email,
    phoneNumber: currentUser?.phoneNumber,
    })
  }, [currentUser])

  return{ state, dispatch}
}


export default useProfile;