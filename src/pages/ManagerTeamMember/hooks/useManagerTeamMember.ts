import { Reducer, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../redux/types";
import teamService from "../../../services/team.service";
import useAuth from "../../../utils/hooks/useAuth";
import { userInfo } from "../../../utils/types";
import { ReducerState } from "../types";

function useManagerTeamMember(onClose?: () => void, isEdit?: boolean) {
  const { currentUser, team }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );

  const { memberId } = useParams();
  const { getUserData } = useAuth()

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
    if (!isEdit) {
      dispatch({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      })
      return;
    };
    const findselectedMember = team.find(
      (member: userInfo) => member.id === Number(memberId)
    );
    dispatch({
      ...findselectedMember,
      firstName: findselectedMember?.firstName,
      lastName: findselectedMember?.lastName,
      email: findselectedMember?.email,
      phoneNumber: findselectedMember?.phoneNumber,
      address: findselectedMember?.address,
    });
  }, [isEdit, memberId]); // eslint-disable-line

  function addTeamMember() {
    const oldContact = (team || []).filter((member: userInfo) => member.id !== Number(memberId));
    const newContact = [
      ...oldContact,
      { ...state, id: Number(memberId) || oldContact?.length + 1 },
    ];
    const addTeam: any = teamService.addTeamMember({
      ...currentUser,
      team: newContact,
    });
    addTeam.then(() => {
      getUserData();
      onClose?.();
    });
  }

  return {
    state,
    dispatch,
    addTeamMember,
  };
}

export default useManagerTeamMember;
