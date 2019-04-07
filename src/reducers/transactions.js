import {
  DELETE_TRANSACTION_SUCCESS,
  LOAD_TRANSACTIONS_SUCCESS,
  UPDATE_TRANSACTION_SUCCESS,
} from '../actions/transactionActions';

const reducer = (state = [], action) => {
  const { type, results } = action;
  switch (type) {
    case LOAD_TRANSACTIONS_SUCCESS: {
      return [...results];
    }
    case UPDATE_TRANSACTION_SUCCESS: {
      return state.map(current => {
        if (current.id === results.id) {
          return { ...results };
        }
        return current;
      });
    }
    case DELETE_TRANSACTION_SUCCESS: {
      const { id } = action;
      return state.filter(current => current.id !== id);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
