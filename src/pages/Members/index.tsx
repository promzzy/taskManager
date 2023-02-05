import { connect } from 'react-redux';
import { RootState } from '../../redux/types';
import Members from './Members';

const mapState = ({user}: RootState) => ({
  myTeam: user.team,
});

export default connect(mapState)(Members)