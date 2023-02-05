type Options = {
  name: any,
  id: string | number,
}
export interface DropdownProps {
  options?: any[],
  className: string,
  placeholder?: string,
  name?: string,
  value?: string | any,
  onChange?: (event: any) => void
}