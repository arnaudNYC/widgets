import { connect } from 'react-redux';
import Widgets from '../components/Widgets';
import {
  createWidgetRequest,
  deleteWidgetRequest,
  loadWidgetsRequest,
  updateWidgetRequest,
} from '../actions/widgetActions';

const mapStateToProps = ({ widgets }) => ({ widgets });

const mapDispatchToProps = {
  createWidgetRequest,
  deleteWidgetRequest,
  loadWidgetsRequest,
  updateWidgetRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Widgets);
