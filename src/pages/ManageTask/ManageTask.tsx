import { FC } from "react";
import InputField from "../../components/InputField";
import classes from './ManageTask.module.css'
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import { ManageTaskProps } from "./types";
import useManageTask from "./hooks/useManageTask";
import Dropdown from "../../components/Dropdown";
const ManageTask: FC<ManageTaskProps> = ({
  isEdit,
}) => {

  return (
    <div className={classes.manageTaskRoot}>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <h3>{`${isEdit ? 'Edit' : 'Create'} Task`}</h3>
          <div className={classes.inputWrap}>
          <InputField
          className={classes.taskTitleInput}
          placeholder="Task Title / Name"
           />
          <div className={classes.inputRow}>
          <Dropdown
           className={classes.dropdown}
           placeholder="Assignee"
            />
          <InputField
          className={classes.taskTitleInput}
          placeholder="Task Title / Name"
           />
           </div>
          <TextArea
          className={classes.textarea}
          placeholder="Task Description / Comment"
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

export default ManageTask;
