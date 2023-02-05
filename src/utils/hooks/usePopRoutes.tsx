import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import ManagerTeamMember from '../../pages/ManagerTeamMember'
import ManageTask from "../../pages/ManageTask";
import { setPopupComponent, showPopup } from "../../redux/features/popupSlice";

function usePopRoutes(){
  const location = useLocation()
  const reduxDispatch = useDispatch()
  const history = useNavigate();

    const onCloseDrawer = () => {
    const splitPath = location?.pathname.split('/');
    splitPath.pop();
    return history(splitPath.join('/'));
  };

  const onEditDrawer = () => {
    const splitPath = location?.pathname.split('/');
    splitPath.splice(-2);
    return history(splitPath.join('/'));
  };

  useEffect(() => {
    if (/\/add-member\/?/g.test(location.pathname)){
     reduxDispatch(setPopupComponent(<ManagerTeamMember onClose={() => {
      onCloseDrawer()
      reduxDispatch(showPopup({ispopupOpen: false}))
    }} />))
     reduxDispatch(showPopup({ispopupOpen: true, onClose: () => onCloseDrawer() }))
    }
    if (/\/edit-member\/?/g.test(location.pathname)){
      reduxDispatch(setPopupComponent(<ManagerTeamMember onClose={
        () => {
      onEditDrawer()
      reduxDispatch(showPopup({ispopupOpen: false}))
    }
      } isEdit />))
      reduxDispatch(showPopup({ispopupOpen: true, onClose: () => onEditDrawer() }))
    }
    if (/\/create-task\/?/g.test(location.pathname)){
      reduxDispatch(setPopupComponent(<ManageTask onClose={() => {
      onCloseDrawer()
      reduxDispatch(showPopup({ispopupOpen: false}))
    }} />))
     reduxDispatch(showPopup({ispopupOpen: true, onClose: () => onCloseDrawer()}))
    }
    if (/\/edit-task\/?/g.test(location.pathname)){
      reduxDispatch(setPopupComponent(<ManageTask onClose={
        () => {
      onEditDrawer()
      reduxDispatch(showPopup({ispopupOpen: false}))
    }
      } isEdit />))
      reduxDispatch(showPopup({ispopupOpen: true, onClose: () => onEditDrawer()}))
    }
  }, [location.pathname])
}

export default usePopRoutes;