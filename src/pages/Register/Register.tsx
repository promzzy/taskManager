import { FC } from "react";
import AuthWrapper from "../../components/AuthWrapper";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import useRegister from "./hooks/useRegister";
import classes from './Register.module.css';

const Register: FC = () => {
  const { history } = useRegister()
  return(
    <AuthWrapper
      onClick={() => history('/')}
      type="REGISTER"
     >
      <div className={classes.cardWrapper}>
        <h2 className={classes.cardTitle}>Let's go!</h2>
          <form style={{width: '100%'}}>
            <div className={classes.inputWrapper}>
              <label>Full Name</label>
              <InputField className={classes.input} placeholder="Enter your email" />
            </div>
            <div className={classes.inputWrapper}>
              <label>Email</label>
              <InputField className={classes.input} placeholder="Enter your email" />
            </div>
            <div className={classes.inputWrapper}>
              <label>Choose Password</label>
              <InputField className={classes.input} placeholder="Enter your email" />
            </div>
            <div className={classes.buttonBox}>
              <Button>Sign up</Button>
            </div>
          </form>
      </div>
    </AuthWrapper>
  )
}

export default Register;