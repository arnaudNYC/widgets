import { connect } from 'react-redux';
import Widgets from '../components/Widgets';
import {
  createWidgetRequest,
  deleteWidgetRequest,
  updateWidgetRequest,
} from '../actions/widgetActions';

const mapStateToProps = ({ widgets }) => ({ widgets });

const mapDispatchToProps = {
  createWidgetRequest,
  deleteWidgetRequest,
  updateWidgetRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Widgets);
