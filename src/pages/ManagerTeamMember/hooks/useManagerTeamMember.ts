import { Reducer, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"
import { setIsLoading } from "../../../redux/features/appSlice";
import { RootState } from "../../../redux/types";
import teamService from "../../../services/team.service";
import useAuth from "../../../utils/hooks/useAuth";
import { userInfo } from "../../../utils/types";
import { ReducerState } from "../types";

function useManagerTeamMember(onClose?: () => void, isEdit?: boolean) {
  const { currentUser, team }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
  const reduxDispatch = useDispatch()
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
    // Validation
    if(!state?.firstName){
      toast.error('First name Cannot be empty')
      return;
    }
    if(!state?.lastName){
      toast.error('Last name Cannot be empty')
      return;
    }
    if(!state?.email){
      toast.error('Email Cannot be empty')
      return;
    }

    const oldContact = (team || []).filter((member: userInfo) => member.id !== Number(memberId));
    const newContact = [
      ...oldContact,
      { ...state, id: Number(memberId) || oldContact?.length + 1 },
    ];
    reduxDispatch(setIsLoading(true))
  setTimeout(() => {
      const addTeam: any = teamService.addTeamMember({
      ...currentUser,
      team: newContact,
    });
    addTeam.then(() => {
      getUserData();
      onClose?.();
      toast.success('Saved successfully')
    })
    .finally(() => {
       reduxDispatch(setIsLoading(false))
    })
  }, 1500);
  }

  return {
    state,
    dispatch,
    addTeamMember,
  };
}

export default useManagerTeamMember;
