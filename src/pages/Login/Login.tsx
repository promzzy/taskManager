import { FC } from "react";
import AuthWrapper from "../../components/AuthWrapper";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import useAuth from "../../utils/hooks/useAuth";
import useLogin from "./hooks/useLogin";
import classes from "./Login.module.css";

const Login: FC = () => {
  const { state, history, dispatch } = useLogin();
  const { email, password } = state;
  const { login } = useAuth();
  return (
    <AuthWrapper onClick={() => history("/register")}>
      <div className={classes.cardWrapper}>
        <h2 className={classes.cardTitle}>Welcome back!</h2>
        <form style={{ width: "100%" }}>
          <div className={classes.inputWrapper}>
            <label>Email</label>
            <InputField
              className={classes.input}
              placeholder="Enter your email"
              name="email"
              type="email"
              value={email}
              required
              onChange={({ target }) => dispatch({ email: target.value })}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Password</label>
            <InputField
              type="password"
              name="password"
              className={classes.input}
              placeholder="Enter your password"
              value={password}
              required
              onChange={({ target }) => dispatch({ password: target.value })}
            />
          </div>
          <div className={classes.buttonBox}>
            <Button onClick={() => login({ email, password })}>Log In</Button>
            <button
              onClick={() => history("/forgot-password")}
              className={classes.forgotBtn}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Login;
