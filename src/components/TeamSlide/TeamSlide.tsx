import { FC } from "react";
import ProfileIcon from "../ProfileIcon";
import classes from './TeamSlide.module.css';
import { TeamSlideProps } from "./types";

const TeamSlide: FC<TeamSlideProps> = ({
  teamName,
  teamMembers = [],
  onAddMember,
  onViewMember,
}) => {
  return(<div className={classes.sliderRoot}>
    <h5 className={classes.teamTitle}>{teamName}</h5>
    <div className={classes.membersContainer}>{teamMembers.map(_ => (
        <ProfileIcon
          onClick={onViewMember}
          className={classes.teamMember}
          firstName="promise"
          lastName="stephen"
        />
    ))}
    <button onClick={onAddMember} className={classes.addMemberBtn}>+</button>
    </div>
  </div>)
}

export default TeamSlide;
