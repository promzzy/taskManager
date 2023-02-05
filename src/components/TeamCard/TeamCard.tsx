import { FC } from "react";
import classes from './TeamCard.module.css';
import defaultImg from '../../assets/jpeg/defaltImage.jpeg'
import { TeamCardProps } from "./types";

const TeamCard: FC<TeamCardProps> = ({
  onClick,
  name,
  phoneNumber,
  email,
}) => {

  return(
    <div onClick={onClick} className={classes.pageRoot}>
        <img className={classes.imageWrapper} src={defaultImg} alt="" />
      <div>
        <div className={classes.memberName}>{name}</div>
        <p>
          <div className={classes.memberEmail}>{email}</div>
          <div className={classes.memberNumber}>{phoneNumber}</div>
        </p>
      </div>
    </div>
  )
}

export default TeamCard;
