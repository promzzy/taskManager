import { FC } from "react";
import brandLogo from "../../assets/jpeg/logo.jpeg"
import classes from './BrandLogo.module.css'

const BrandLogo: FC = () => {
  return(
    <div className={classes.brandLogo}>
      <img src={brandLogo} alt="task manager" />
    </div>
  )
}

export default BrandLogo;