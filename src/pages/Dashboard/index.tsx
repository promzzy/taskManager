import { connect } from "react-redux";
import Dashboard from './Dashboard'
import { RootState} from '../../redux/types'

const mapStates = ({user}: RootState ) => ({
  currentUser: user.currentUser,
  task: user.task,
});

export default connect(mapStates)(Dashboard);