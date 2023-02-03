import { FC } from "react";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import classes from './ForgotPassword.module.css'

const ForgotPassword: FC = () => {
  const history = useNavigate()
  return(
        <AuthWrapper onClick={() => history('/register')}>
      <div className={classes.cardWrapper}>
        <h2 className={classes.cardTitle}>Forgot your password?</h2>
          <form style={{width: '100%'}}>
            <div className={classes.inputWrapper}>
              <label>Email</label>
              <InputField className={classes.input} placeholder="Enter your email" />
            </div>
            <div className={classes.buttonBox}>
              <Button>Send me the link</Button>
              <button onClick={() => history('/')} className={classes.signInBtn}>or sign in</button>
            </div>
          </form>
      </div>
  </AuthWrapper>
  )
}

export default ForgotPassword