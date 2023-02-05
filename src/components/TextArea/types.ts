import { ChangeEventHandler } from "react"

export type TextAreaProps = {
  label?: string,
  rows?: number,
  className?: string
  placeholder: string,
  value?: string,
  onChange?: ChangeEventHandler<HTMLTextAreaElement>,
  name?: string,
}