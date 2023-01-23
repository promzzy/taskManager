import { FC } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../../components/AppBar";
import Popup from "../../components/Popup";
import SideNavigator from "../../components/SideNavigator";
import classes from './DashboardLayout.module.css'

const DashboardLayout: FC = () => {
  return (  <div className={classes.pageRoot}>
      <Popup />
        <SideNavigator />
      <div className={classes.pageView}>
        <AppBar />
        <div className={classes.pageContent}><Outlet /></div>
      </div>
    </div>)
}
export  default DashboardLayout;