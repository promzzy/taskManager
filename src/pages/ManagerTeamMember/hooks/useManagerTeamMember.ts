import { Reducer, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setTeamMember } from "../../../redux/features/userSlice";
import { RootState } from "../../../redux/types";
import authService from "../../../services/auth.service";
import teamService from "../../../services/team.service";
import { userInfo } from "../../../utils/types";
import { ReducerState } from "../types";

function useManagerTeamMember(onClose?: () => void, isEdit?: boolean) {
  const { currentUser, team }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
  const reduxDispatch = useDispatch();

  const { memberId } = useParams();

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

  function getUserData() {
    const users: any = authService.onLogin();
    users.then(({ USER }: any) => {
      const logedInUser = USER.find(
        (item: userInfo) => item.id === currentUser.id
      );
      reduxDispatch(setTeamMember(logedInUser?.team || []));
    });
  }

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
      firstName: findselectedMember?.firstName,
      lastName: findselectedMember?.lastName,
      email: findselectedMember?.email,
      phoneNumber: findselectedMember?.phoneNumber,
      address: findselectedMember?.address,
    });
  }, [isEdit, memberId]);

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
