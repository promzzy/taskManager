import { TaskProps } from "../../utils/types"

export type TaskTableProps = {
  assigneeIcon?: string,
  taskOptions: TaskProps[],
  tableTitl: string,
  onClick?: any,
  onDelete: any,
  createTaskClick?: () => void,
  className?: string,
}