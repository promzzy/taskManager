import { Reducer, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDispatcher, LoginStateProps } from "../types";

function useLogin() {
  const history = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  const [state, dispatch] = useReducer<
    Reducer<LoginStateProps, LoginDispatcher>
  >((stateValues, values) => ({ ...stateValues, ...values }), initialState);

  return {
    state,
    dispatch,
    history,
  };
}

export default useLogin;
