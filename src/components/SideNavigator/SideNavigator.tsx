import { FC, useCallback, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { navPaths } from "./constants";
import classes from './SideNavigator.module.css';
import { RouteType } from "./types";
import { RxEnter, RxCross2 } from "react-icons/rx";


const SideNavigator: FC = () => {

  const location = useLocation()
  const history = useNavigate()
  const [tuggleSideNav, setTuggleSideNav] = useState(true)

    const isPathVisited = useCallback(
    (navItem: RouteType) =>
      new RegExp(`^${ navItem.path}`).test(
        location.pathname,
      ),
    [location.pathname],
  );

  return ( <div className={`${classes.sideNavBar} ${!tuggleSideNav ? classes.isCollaps : undefined}`}>
      <div className={classes.sideNavTop}>

        <button onClick={() => setTuggleSideNav(!tuggleSideNav)} className={classes.tuggleContainer}>{
          tuggleSideNav
          ?
          <RxCross2 className={classes.tuggleIcon} />
          :
          <RxEnter className={classes.tuggleIcon} />
        }</button>
      </div>
      <div>
        {
         navPaths.map((path: RouteType) => (
         <button
         onClick={() => history(path.path)}
          className={`${classes.routeBtn} ${ isPathVisited(path) ? classes.isActive : undefined}`}>
          <span>{path?.icon}</span>
          <span>{path.name}</span>
         </button>
         ))
        }
      </div>
      </div>)

}
  export default SideNavigator;
