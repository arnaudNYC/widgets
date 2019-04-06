import { LOAD_TRANSACTIONS_SUCCESS } from '../actions/transactionActions';

const reducer = (state = [], action) => {
  const { type, results } = action;
  switch (type) {
    case LOAD_TRANSACTIONS_SUCCESS: {
      return [...results];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
