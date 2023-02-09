import { FC } from "react";
import { useNavigate } from "react-router-dom";
import TeamCard from "../../components/TeamCard";
import TeamSlide from "../../components/TeamSlide";
import useMembers from "./hooks/useMembers";
import classes from "./Members.module.css";
import { MembersProps } from "./types";

const Members: FC<MembersProps> = ({ myTeam = [] }) => {
  const history = useNavigate();
  const { deleteMember } = useMembers();

  return (
    <div className={classes.pageRoot}>
      <TeamSlide
        teamName="Team Members"
        onAddMember={() => {
          history("/members/add-member");
        }}
      />
      {myTeam?.length ? (
        <div className={classes.mainBody}>
          {myTeam.map((member) => (
            <TeamCard
              name={`${member?.firstName} ${member?.lastName}`}
              email={member?.email}
              phoneNumber={member?.phoneNumber}
              onClick={() => history(`/members/edit-member/${member.id}`)}
              onDelete={() => deleteMember(member.id)}
            />
          ))}
        </div>
      ) : (
        <div className={classes.emptyList}>
          <h3>No Team Member Found</h3>
        </div>
      )}
    </div>
  );
};

export default Members;
