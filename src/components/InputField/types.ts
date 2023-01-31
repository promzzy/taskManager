import { ChangeEventHandler } from "react"

export type InputFieldProps = {
  className?: string
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  placeholder: string,
}