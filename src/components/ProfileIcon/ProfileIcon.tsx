import { FC } from "react";
import classes from "./ProfileIcon.module.css";
import { profileIconProps } from "./types";

const ProfileIcon: FC<profileIconProps> = ({ firstName, lastName, className, image, onClick }) => {
  return (
    <span onClick={onClick} className={`${classes.assingneeIcon} ${className}`}>
      {image ? (
        <img src={image} alt="" />
      ) : (
        `${firstName?.charAt(0) || '-'}${lastName?.charAt(0) || '-'}`
      )}
    </span>
  );
};

export default ProfileIcon;
