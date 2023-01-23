import { FC, useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { navPaths } from "./constants";
import classes from './SideNavigator.module.css';
import { RouteType } from "./types";

const SideNavigator: FC = () => {

  const location = useLocation()
  const history = useNavigate()

    const isPathVisited = useCallback(
    (navItem: RouteType) =>
      new RegExp(`^${ navItem.path}`).test(
        location.pathname,
      ),
    [location.pathname],
  );

  return ( <div className={classes.sideNavBar}>
      <div className={classes.sideNavTop}>husul</div>
      <div>
        {
         navPaths.map((path: RouteType) => (
         <button
         onClick={() => history(path.path)}
          className={`${classes.routeBtn} ${ isPathVisited(path) ? classes.isActive : undefined}`}>
          <span>{path.icon}</span>
          <span>{path.name}</span>
         </button>
         ))
        }
      </div>
      </div>)

}
  export default SideNavigator;
