import { connect } from 'react-redux';
import { RootState } from '../../redux/types';
import ManageTask from './ManageTask';

const mapState = ({user}: RootState) => ({
  myTeam: user.team,
});

export default connect(mapState)(ManageTask)