import { FC } from "react";
import AuthWrapper from "../../components/AuthWrapper";
import BrandLogo from "../../components/BrandLogo";
import Button from "../../components/Button";
import Card from "../../components/Card";
import InputField from "../../components/InputField";
import useLogin from "./hooks/useLogin";
import classes from './Login.module.css';

const Login: FC = () => {

  const { history } = useLogin()
  return(

    <AuthWrapper onClick={() => history('/register')}>
      <div className={classes.cardWrapper}>
        <h2 className={classes.cardTitle}>Welcome back!</h2>
          <form style={{width: '100%'}}>
            <div className={classes.inputWrapper}>
              <label>Email</label>
              <InputField className={classes.input} placeholder="Enter your email" />
            </div>
            <div className={classes.inputWrapper}>
              <label>Email</label>
              <InputField className={classes.input} placeholder="Enter your email" />
            </div>
            <div className={classes.buttonBox}>
              <Button>Log In</Button>
            </div>
          </form>
      </div>
  </AuthWrapper>

)}

export default Login;
