import { FC } from "react";
import { useNavigate } from "react-router-dom";
import TeamCard from "../../components/TeamCard";
import TeamSlide from "../../components/TeamSlide";
import classes from './Members.module.css';

const Members: FC = () => {

  const history = useNavigate()

  return(<div className={classes.pageRoot}>
    <TeamSlide
      teamName='Team Members'
      onAddMember={() => {history("/members/add-member")}}
     />
     <div className={classes.mainBody}>
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(member =>(
          <TeamCard onClick={() => history(`/members/edit-member/${4}`)} />
        ))
      }
     </div>
  </div>)
}

export default Members;