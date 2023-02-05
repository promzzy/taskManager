import { connect } from 'react-redux'
import { showPopup, setPopupComponent } from '../../redux/features/popupSlice';
import Taskboard from './Taskboard';
import {DispatchType, RootState} from '../../redux/types'
import { ReactElement } from 'react';

const mapStates = ({user}: RootState) => ({
  myTeam: user.team,
  task: user.task,
});

const mapDispatch = (dispatch: DispatchType) => ({
  showPopup: (data: boolean) => dispatch(showPopup(data)),
  setPopupComponent: (data: ReactElement) => dispatch(setPopupComponent(data))
})
export default connect(mapStates, mapDispatch)(Taskboard)