import {connect} from 'react-redux';
import * as numberActions from '../../stores/actions';
import {bindActionCreators} from 'redux';
import NumbersContainer from '../containers/NumbersContainer';
import {TNumbersList} from '../../stores/models/numbers';
import {getNumbersToDisplay} from '../../stores/selectors';
import {TRootStore} from '../../stores/reducers';

type TProps = (
  state: TRootStore,
) => {
  numbers: TNumbersList;
};

const mapStateToProps: TProps = state => ({
  numbers: getNumbersToDisplay(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(numberActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NumbersContainer);
