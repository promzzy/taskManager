import { FC } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../../components/AppBar";
import SideNavigator from "../../components/SideNavigator";
import classes from './DashboardLayout.module.css'

const DashboardLayout: FC = () => {
  return (  <div className={classes.pageRoot}>
        <SideNavigator />
      <div className={classes.pageView}>
        <AppBar />
        <div><Outlet /></div>
      </div>
    </div>)
}
export  default DashboardLayout;