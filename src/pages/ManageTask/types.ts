import { userInfo } from "../../utils/types"

export type ManageTaskProps = {
  isEdit?: boolean,
  myTeam: userInfo[],
  onClose?: () => void,
}

export type ReducerProps = {
    title: string,
    assignee: any,
    dueDate: string,
    status: string,
    priority: string,
    description: string,
}

export type HooksProps = {
  isEdit?: boolean,
  onClose?: () => void,
}