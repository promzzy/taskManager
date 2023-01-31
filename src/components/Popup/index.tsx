import { connect } from 'react-redux';
import { showPopup } from '../../redux/features/popupSlice';
import { DispatchType, RootState } from '../../redux/types';
import Popup from './Popup';

const mapState = ({popup}: RootState) => ({
  ispopupOpen: popup.ispopupOpen,
  popupComponent: popup.popupComponent,
  onClose: popup.onClose,
})

const mapDispatch = (dispatch: DispatchType) => ({
  showPopup: (data: boolean) => dispatch(showPopup(data))
})

export default connect(mapState, mapDispatch)(Popup)