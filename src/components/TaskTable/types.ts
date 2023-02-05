import { TaskProps } from "../../utils/types"

export type TaskTableProps = {
   title?: string,
  assigneeIcon?: string,
  dueDate?: string,
    assigneeFirstName: string,
  assigneeLastName: string,
  taskOptions: TaskProps[],
  tableTitl: string,
  onClick?: any,
  createTaskClick?: () => void,
  className?: string,
}