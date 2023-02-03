import { ChangeEventHandler } from "react"

export type InputFieldProps = {
  className?: string
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  placeholder: string,
  endIcon?: string,
  type?: string,
  password?: boolean,
  name?: string,
}