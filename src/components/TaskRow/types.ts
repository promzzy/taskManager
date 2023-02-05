export type TaskRowProps = {
  title: string,
  description: string,
  status: string,
  category: string,
  date: string,
  firstName: string,
  lastName: string,
  className?: string,
  onClick?: () => void,
}