import { ReactNode } from "react"

export type AuthWrapperProps = {
  children: ReactNode,
  onClick?: () => void,
  type?: string,
  rightComponent?: any,
}