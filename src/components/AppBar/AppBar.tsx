import { FC } from "react";
import Button from "../Button";
import classes from './AppBar.module.css'
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../utils/hooks/useAuth";


const AppBar: FC = () => {
  const { logOut } = useAuth()
  return(
    <div className={classes.appBarRoot} >
        <Button onClick={logOut} className={classes.logOutbtn}>
          <span>Logout</span>
          <FaSignOutAlt />
        </Button>
    </div>
  )
};

export default AppBar;