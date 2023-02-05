export type ManageTeamProps = {
  isEdit?: boolean,
  onClose?: () => void,
}

export interface ReducerState {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  address: string,
}