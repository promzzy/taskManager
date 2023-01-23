import { FC } from "react";
import classes from './TeamSlide.module.css';
import { TeamSlideProps } from "./types";

const TeamSlide: FC<TeamSlideProps> = ({
  teamName,
}) => {
  return(<div className={classes.sliderRoot}>
    <h5 className={classes.teamTitle}>{teamName}</h5>
    <div>teamName</div>
  </div>)
}

export default TeamSlide;
