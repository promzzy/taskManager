import { FC } from "react";
import classes from "./TeamCard.module.css";
import defaultImg from "../../assets/jpeg/defaltImage.jpeg";
import { TeamCardProps } from "./types";
import deleteIcon from "../../assets/svg/icon-delete.svg";

const TeamCard: FC<TeamCardProps> = ({ onClick, name, phoneNumber, email, onDelete }) => {
  return (
    <div onClick={onClick} className={classes.pageRoot}>
      <div className={classes.bodyLeft}>
        <img className={classes.imageWrapper} src={defaultImg} alt="" />
        <div>
          <div className={classes.memberName}>{name}</div>
          <p>
            <div className={classes.memberEmail}>{email}</div>
            <div className={classes.memberNumber}>{phoneNumber}</div>
          </p>
        </div>
      </div>
      <button
        className={classes.deleteBtn}
        onClick={(e) => {
          e.stopPropagation();
          onDelete()
        }}
      >
        <img src={deleteIcon} alt="" height="18px" />
      </button>
    </div>
  );
};

export default TeamCard;
