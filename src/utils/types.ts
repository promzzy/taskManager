export type name = string
export type errorCatch = {message: string}
export interface userInfo {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  id?: number,
}

export interface TaskProps {
  title: string,
  assignee: userInfo,
  dueDate: string,
  status: string,
  priority: string,
  id?: number,
  createdAt: string,
  description?: string,
}