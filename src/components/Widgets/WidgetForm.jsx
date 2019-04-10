import React from 'react';
import { PropTypes } from 'prop-types';

const WidgetForm = ({ actions }) => (
  <div>{JSON.stringify(Object.keys(actions))}</div>
);

WidgetForm.propTypes = {
  actions: PropTypes.shape({
    createWidgetRequest: PropTypes.func.isRequired,
  }).isRequired,
};
export default WidgetForm;
