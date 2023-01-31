import { ReactElement } from "react"

export type TaskBoardProps = {
  showPopup: (show: boolean) => void,
  setPopupComponent: (compounent: ReactElement) => void,
}