import { FC } from "react";
import AuthWrapper from "../../components/AuthWrapper";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import useRegister from "./hooks/useRegister";
import classes from "./Register.module.css";

const Register: FC = () => {
  const { state, dispatch, history } = useRegister();
  const { firstName, lastName, email, password, phoneNumber } = state;
  return (
    <AuthWrapper onClick={() => history("/")} type="REGISTER">
      <div className={classes.cardWrapper}>
        <h2 className={classes.cardTitle}>Let's go!</h2>
        <form style={{ width: "100%" }}>
          <div className={classes.inputRow}>
            <div className={classes.inputWrapper}>
              <label>First Name</label>
              <InputField
                className={classes.input}
                placeholder="First Name"
                value={firstName}
                onChange={({target}) => dispatch({firstName: target.value})}
              />
            </div>
            <div className={classes.inputWrapper}>
              <label>Last Name</label>
              <InputField
                className={classes.input}
                placeholder="Last Name"
                value={lastName}
                onChange={({target}) => dispatch({lastName: target.value})}
              />
            </div>
          </div>

          <div className={classes.inputRow}>
            <div className={classes.inputWrapper}>
              <label>Email</label>
              <InputField
                className={classes.input}
                placeholder="Enter your email"
                value={email}
                onChange={({target}) => dispatch({email: target.value})}
              />
            </div>
            <div className={classes.inputWrapper}>
              <label>Phone Number</label>
              <InputField
                className={classes.input}
                placeholder="080XXXXXX..."
                value={phoneNumber}
                name="phoneNumber"
                onChange={({target}) => dispatch({phoneNumber: target.value})}
              />
            </div>
          </div>
          <div className={classes.inputWrapper}>
            <label>Choose Password</label>
            <InputField
              type="password"
              className={classes.input}
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={({target}) => dispatch({password: target.value})}
            />
          </div>
          <div className={classes.buttonBox}>
            <Button>Sign up</Button>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Register;
