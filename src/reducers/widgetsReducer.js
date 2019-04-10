import {
  CREATE_WIDGET_SUCCESS,
  DELETE_WIDGET_SUCCESS,
  LOAD_WIDGETS_SUCCESS,
  UPDATE_WIDGET_SUCCESS,
} from '../actions/widgetActions';

const reducer = (state = [], action) => {
  const { type, results } = action;
  switch (type) {
    case LOAD_WIDGETS_SUCCESS: {
      return [...results];
    }
    case CREATE_WIDGET_SUCCESS: {
      return [...state, results];
    }
    case UPDATE_WIDGET_SUCCESS: {
      return state.map(current => {
        if (current.id === results.id) {
          return { ...results };
        }
        return current;
      });
    }
    case DELETE_WIDGET_SUCCESS: {
      const { id } = action;
      return state.filter(current => current.id !== id);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
