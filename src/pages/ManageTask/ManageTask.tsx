import { FC, useMemo } from "react";
import InputField from "../../components/InputField";
import classes from './ManageTask.module.css'
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import { ManageTaskProps } from "./types";
import useManageTask from "./hooks/useManageTask";
import Dropdown from "../../components/Dropdown";
import { userInfo } from "../../utils/types";
const ManageTask: FC<ManageTaskProps> = ({
  isEdit,
  onClose,
  myTeam = [],
}) => {

  const { state, allStatus, allMembers, dispatch, createTask } = useManageTask({isEdit, onClose})

  const {
      title,
      assignee,
      dueDate,
      status,
      priority,
      description,
  } = state;

  return (
    <div className={classes.manageTaskRoot}>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <h3>{`${isEdit ? 'Edit' : 'Create'} Task`}</h3>
          <div className={classes.inputWrap}>
          <InputField
          className={classes.taskTitleInput}
          placeholder="Task Title / Name"
          value={title}
          name="title"
          onChange={({target}) => dispatch({title: target.value})}
           />
          <div className={classes.inputRow}>
          <Dropdown
           className={classes.dropdown}
           placeholder="Status"
           options={allStatus}
           value={status}
           onChange={({ target}) => dispatch({status: target.value})}
            />
          <Dropdown
           className={classes.dropdown}
           placeholder="Assignee"
           options={allMembers}
           value={assignee?.id}
           onChange={({target}) => {
            const findAssignee = allMembers.find((assignee: userInfo) => assignee.id === Number(target.value));
                dispatch({assignee: findAssignee})
           }}
            />
           </div>
          <TextArea
          className={classes.textarea}
          placeholder="Task Description / Comment"
          value={description}
          onChange={({target}) => dispatch({description: target.value})}
          />
          </div>

           <div className={classes.actionBox}>
            <Button onClick={onClose} className={classes.cancelBtn}>Cancel</Button>
            <Button onClick={createTask} >Submit</Button>
           </div>
      </form>
    </div>
  )
}

export default ManageTask;
