import { ReactElement } from "react";

export type cardProps = {
  className?: string,
  title: string,
  icon?: ReactElement<any, any>,
  description: string,
  onClick?: () => void,
}