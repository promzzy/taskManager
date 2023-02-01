import { FC } from "react";
import { CardProps } from "./types";
import classes from './Card.module.css';

const Card: FC<CardProps> = ({children}) => {
  return(
    <div className={classes.cardRoot}>{children} </div>
  )
}

export default Card;