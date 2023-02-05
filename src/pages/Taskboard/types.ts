import { ReactElement } from "react"
import { TaskProps, userInfo } from "../../utils/types"

export type TaskBoardProps = {
  showPopup: (show: boolean) => void,
  setPopupComponent: (compounent: ReactElement) => void,
  myTeam: userInfo[],
  task: TaskProps[],
}