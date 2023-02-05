import { FC } from "react";
import { PopupProps } from "./types";
import classes from './Popup.module.css';

const Popup: FC<PopupProps> = ({
  ispopupOpen,
  popupComponent,
  showPopup,
  onClose,
}) => {
  function closePopup(){
    showPopup(false)
    onClose?.();
  }
  return (
    <div onClick={closePopup} className={`${classes.popupRoot} ${!ispopupOpen ? classes.popupOpen : undefined}`}>
      <span onClick={(event) => event.stopPropagation()} className={classes.childComponent}>{popupComponent}</span>
    </div>
  )
}

export default Popup;
