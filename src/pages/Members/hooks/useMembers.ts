import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTeamMember } from "../../../redux/features/userSlice"
import { RootState } from "../../../redux/types"
import authService from "../../../services/auth.service"
import { userInfo } from "../../../utils/types"

function useMembers(){

   const { currentUser }: any = useSelector((reduxState: RootState) => reduxState.user)
    const reduxDispatch = useDispatch()


     useEffect(() => {
     const users: any = authService.onLogin()
      users.then(({USER}: any) => {
        const logedInUser = USER.find((item: userInfo) => item.id === currentUser.id)
          reduxDispatch(setTeamMember(logedInUser?.team || []))
      })
  }, [])
}

export default useMembers;