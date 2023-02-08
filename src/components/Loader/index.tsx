import { connect } from 'react-redux'
import Loader from './Loader'
import { RootState } from '../../redux/types';

const mapStateToProps = ({ app }: RootState) => ({
  isLoading: app.isLoading,
});

export default connect(mapStateToProps)(Loader)