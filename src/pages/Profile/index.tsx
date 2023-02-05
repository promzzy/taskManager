import { connect } from "react-redux";
import { RootState } from "../../redux/types";
import Profile from './Profile';

const mapStates = ({user}: RootState) => ({
  currentUser: user.currentUser,
});

export default connect(mapStates)(Profile)