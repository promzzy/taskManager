export type TaskTableProps = {
   title?: string,
  assigneeIcon?: string,
  dueDate?: string,
    assigneeFirstName: string,
  assigneeLastName: string,
  taskOptions: number[]
  onClick?: () => void
}