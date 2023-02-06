import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTeamMember } from "../../../redux/features/userSlice";
import { RootState } from "../../../redux/types";
import authService from "../../../services/auth.service";
import teamService from "../../../services/team.service";
import useAuth from "../../../utils/hooks/useAuth";
import { userInfo } from "../../../utils/types";

function useMembers() {
  const { currentUser, team }: any = useSelector(
    (reduxState: RootState) => reduxState.user
  );
  const reduxDispatch = useDispatch();
  const { getUserData } = useAuth()

  useEffect(() => {
    const users: any = authService.onLogin();
    users.then(({ USER }: any) => {
      const logedInUser = USER.find(
        (item: userInfo) => item.id === currentUser.id
      );
      reduxDispatch(setTeamMember(logedInUser?.team || []));
    });
  }, []); // eslint-disable-line

  function deleteMember(id: number | undefined) {

    const remvoveById = team.filter((item: userInfo) => item.id !== id);

    const service: any = teamService.addTeamMember({
      ...currentUser,
      team: remvoveById,
    });
    service.then(() => {
      getUserData();
    });
  }

  return { deleteMember };
}

export default useMembers;
