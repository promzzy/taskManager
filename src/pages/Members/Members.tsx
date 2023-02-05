import { FC } from "react";
import { useNavigate } from "react-router-dom";
import TeamCard from "../../components/TeamCard";
import TeamSlide from "../../components/TeamSlide";
import useMembers from "./hooks/useMembers";
import classes from './Members.module.css';
import { MembersProps } from "./types";

const Members: FC<MembersProps> = ({
  myTeam = [],
}) => {

  const history = useNavigate()
  useMembers();

  console.log(myTeam)

  return(<div className={classes.pageRoot}>
    <TeamSlide
      teamName='Team Members'
      onAddMember={() => {history("/members/add-member")}}
     />
     <div className={classes.mainBody}>
      {
        myTeam.map(member =>(
          <TeamCard
            name={`${member?.firstName} ${member?.lastName}`}
            email={member?.email}
            phoneNumber={member?.phoneNumber}
            onClick={() => history(`/members/edit-member/${member.id}`)}
            />
        ))
      }
     </div>
  </div>)
}

export default Members;