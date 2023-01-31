import { FC } from "react";
import classes from './TeamCard.module.css';
import defaultImg from '../../assets/jpeg/defaltImage.jpeg'
import { TeamCardProps } from "./types";

const TeamCard: FC<TeamCardProps> = ({
  onClick,
}) => {

  return(
    <div onClick={onClick} className={classes.pageRoot}>
        <img className={classes.imageWrapper} src={defaultImg} alt="" />
      <div>
        <div className={classes.memberName}>Promise Stephen</div>
        <p>
          <div className={classes.memberEmail}>promisestephen29@gmail.com</div>
          <div className={classes.memberNumber}>08064453389</div>
        </p>
      </div>
    </div>
  )
}

export default TeamCard;
