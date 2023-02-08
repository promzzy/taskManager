import { FC } from "react";
import InputField from "../../components/InputField";
import classes from './ManageTask.module.css'
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import { ManageTaskProps } from "./types";
import useManageTask from "./hooks/useManageTask";
import Dropdown from "../../components/Dropdown";
import { userInfo } from "../../utils/types";
import { allStatus, priorityOptions } from "./constants";
const ManageTask: FC<ManageTaskProps> = ({
  isEdit,
  onClose,
}) => {

  const { state, allMembers, dispatch, createTask } = useManageTask({isEdit, onClose})

  const {
      title,
      assignee,
      status,
      description,
      priority,
      dueDate
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
               if(findAssignee) {
                 dispatch({assignee: findAssignee})
                 return
                }
                dispatch({
                  assignee: {firstName: '', lastName: '',}
                })

           }}
            />
           </div>
          <div className={classes.inputRow}>
          <Dropdown
           className={classes.dropdown}
           placeholder="Priority Level"
           options={priorityOptions}
           value={priority}
           onChange={({ target}) => dispatch({priority: target.value})}
            />
            <div style={{width: '95%'}}>
          <label htmlFor="">DueDate</label>
          <InputField
          className={classes.taskTitleInput}
          placeholder="Task Title / Name"
          value={dueDate}
          name="title"
          type="date"
          onChange={({target}) => dispatch({dueDate: target.value})}
           />
            </div>
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
