import { connect } from 'react-redux'
import { showPopup } from '../../redux/features/popupSlice';
import Taskboard from './Taskboard';
import {DispatchType, RootState} from '../../redux/types'

const mapStates = ({}: RootState) => ({});

const mapDispatch = (dispatch: DispatchType) => ({
  showPopup: (data: boolean) => dispatch(showPopup(data))
})
export default connect(mapStates, mapDispatch)(Taskboard)