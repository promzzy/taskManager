import { FC } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import classes from './ManagerTeamMember.module.css'
import { ManageTeamProps } from "./types";

const ManagerTeamMember: FC<ManageTeamProps> = ({
  isEdit,
}) => {
  return (
    <div className={classes.ManageTeamRoot}>
          <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <h3>{`${isEdit ? 'Edit' : 'Add New'} Member`}</h3>
          <div className={classes.inputWrap}>
      <div className={classes.inputRow}>
        <InputField
          className={classes.taskTitleInput}
          placeholder="First Name"
           />
        <InputField
          className={classes.taskTitleInput}
          placeholder="Last Name"
           />
      </div>
          <div className={classes.inputRow}>
        <InputField
          className={classes.taskTitleInput}
          placeholder="Email Address"
           />
          <InputField
          className={classes.taskTitleInput}
          placeholder="Phone Number"
           />
           </div>
          <TextArea
          className={classes.textarea}
          placeholder="Address"
          />
          </div>

           <div className={classes.actionBox}>
            <Button className={classes.cancelBtn}>Cancel</Button>
            <Button >Submit</Button>
           </div>
      </form>
    </div>
  )
}

export default ManagerTeamMember;
