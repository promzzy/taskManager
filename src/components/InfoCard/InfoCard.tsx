import { FC } from "react";
import classes from './InfoCard.module.css';
import { cardProps } from "./types";

const InfoCard: FC<cardProps> = ({
  className,
  title,
  icon,
  description,
  onClick
}) =>{

  return (
    <div className={`${classes.cardRoot} ${className}`}>
      <div className={classes.cardIcon}>{icon}</div>
      <div className={classes.cardTitle}>{title}</div>
      <div className={classes.cardDesc}>{description}</div>
      <button onClick={onClick} className={classes.button}>View Task</button>
    </div>
  )
}

export default InfoCard;
