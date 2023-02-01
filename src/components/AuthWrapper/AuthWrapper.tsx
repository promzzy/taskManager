import { FC } from "react";
import BrandLogo from "../BrandLogo";
import Button from "../Button";
import classes from "./AuthWrapper.module.css";
import { AuthWrapperProps } from "./types";
import waveImage from '../../assets/svg/wave.svg'

const AuthWrapper: FC<AuthWrapperProps> = ({ children, onClick, type, rightComponent }) => {
  return (
    <div className={classes.pageRoot}>
        <div className={classes.pageTop}>
          <BrandLogo />
          <div className={classes.signUpbtnWrapper}>
            <span className={classes.buttonTypeText}>{type === 'REGISTER' ? "Already have an account?" : "Don't have an account?"}</span>
            <Button onClick={onClick} className={classes.signUpBtn}>
              {type === 'REGISTER' ? "Login" : "Sign up"}
            </Button>

          </div>
        </div>
       <div className={classes.loginBody}>{children}</div>
       <img src={waveImage} className={classes.imageBg} alt="" />
    </div>
  );
};

export default AuthWrapper;
