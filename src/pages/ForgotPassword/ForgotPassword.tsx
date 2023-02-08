import { FC } from "react";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import classes from './ForgotPassword.module.css'
import useForgotPassword from "./hooks/useForgotPassword";

const ForgotPassword: FC = () => {
  const history = useNavigate()
  const {email, setEmail, getUserData } = useForgotPassword();
  return(
        <AuthWrapper onClick={() => history('/register')}>
      <div className={classes.cardWrapper}>
        <h2 className={classes.cardTitle}>Forgot your password?</h2>
          <form style={{width: '100%'}}>
            <div className={classes.inputWrapper}>
              <label>Email</label>
              <InputField
              className={classes.input}
              name="email"
              value={email}
              type="email"
              onChange={({target}) => setEmail(target.value)}
              placeholder="Enter your email"
               />
            </div>
            <div className={classes.buttonBox}>
              <Button onClick={getUserData}>Send me the link</Button>
              <button onClick={() => history('/')} className={classes.signInBtn}>or sign in</button>
            </div>
          </form>
      </div>
  </AuthWrapper>
  )
}

export default ForgotPassword