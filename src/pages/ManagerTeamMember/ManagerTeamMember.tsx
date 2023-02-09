import { FC } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import useManagerTeamMember from "./hooks/useManagerTeamMember";
import classes from "./ManagerTeamMember.module.css";
import { ManageTeamProps } from "./types";

const ManagerTeamMember: FC<ManageTeamProps> = ({ isEdit, onClose }) => {
  const { state, dispatch, addTeamMember } = useManagerTeamMember(
    onClose,
    isEdit
  );

  const { firstName, lastName, email, phoneNumber, address } = state;
  return (
    <div className={classes.ManageTeamRoot}>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <h3>{`${isEdit ? "Edit" : "Add New"} Member`}</h3>
        <div className={classes.inputWrap}>
          <div className={classes.inputRow}>
            <InputField
              className={classes.taskTitleInput}
              value={firstName}
              onChange={({ target }) => dispatch({ firstName: target.value })}
              placeholder="First Name"
              name="firstName"
            />
            <InputField
              className={classes.taskTitleInput}
              value={lastName}
              onChange={({ target }) => dispatch({ lastName: target.value })}
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className={classes.inputRow}>
            <InputField
              className={classes.taskTitleInput}
              value={email}
              onChange={({ target }) => dispatch({ email: target.value })}
              name="email"
              placeholder="Email Address"
            />
            <InputField
              className={classes.taskTitleInput}
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={({ target }) => dispatch({ phoneNumber: target.value })}
              name="phoneNumber"
            />
          </div>
          <TextArea
            className={classes.textarea}
            placeholder="Address"
            value={address}
            onChange={({ target }) => dispatch({ address: target.value })}
            name="address"
          />
        </div>

        <div className={classes.actionBox}>
          <Button onClick={onClose} className={classes.cancelBtn}>
            Cancel
          </Button>
          <Button onClick={addTeamMember}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ManagerTeamMember;
