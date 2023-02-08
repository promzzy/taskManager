export type TaskRowProps = {
  title: string,
  status: string,
  date: string,
  firstName: string,
  lastName: string,
  className?: string,
  priority: string,
  onClick?: () => void,
  onDelete?: any,
}