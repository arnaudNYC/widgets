import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const defaultState = {
  amount: 0,
  date: '',
  name: '',
  type: 'METAL',
};

const WidgetForm = ({ actions }) => {
  const [state, setState] = useState(defaultState);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const createWidget = () => {
    actions.createWidgetRequest(state);
    setState(defaultState);
  };

  // TODO: apply material-ui styling
  return (
    <div>
      Name:
      <input name="name" onChange={onChange} type="text" value={state.name} />
      Date:
      <input name="date" onChange={onChange} type="date" value={state.date} />
      Type:
      <select name="type" onChange={onChange} value={state.type}>
        <option value="METAL">Metal</option>
        <option value="PLASTIC">Plastic</option>
      </select>
      Amount:
      <input
        name="amount"
        onChange={({ target }) => {
          onChange({ target: { name: 'amount', value: +target.value } });
        }}
        type="number"
        value={state.amount}
      />
      <button onClick={createWidget} type="button">
        add new widget
      </button>
    </div>
  );
};

WidgetForm.propTypes = {
  actions: PropTypes.shape({
    createWidgetRequest: PropTypes.func.isRequired,
  }).isRequired,
};
export default WidgetForm;
