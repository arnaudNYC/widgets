import { CALL_API } from '../middleware/api';

// GET: LOAD
export const LOAD_TRANSACTIONS_REQUEST = 'LOAD_TRANSACTIONS_REQUEST';
export const LOAD_TRANSACTIONS_SUCCESS = 'LOAD_TRANSACTIONS_SUCCESS';
export const LOAD_TRANSACTIONS_FAILURE = 'LOAD_TRANSACTIONS_FAILURE';

const fetchTransactions = () => ({
  [CALL_API]: {
    endpoint: 'transactions',
    types: [
      LOAD_TRANSACTIONS_REQUEST,
      LOAD_TRANSACTIONS_SUCCESS,
      LOAD_TRANSACTIONS_FAILURE,
    ],
  },
});

export const loadTransactionsRequest = () => dispatch =>
  dispatch(fetchTransactions());

// POST: CREATE
export const CREATE_TRANSACTION_REQUEST = 'CREATE_TRANSACTION_REQUEST';
export const CREATE_TRANSACTION_SUCCESS = 'CREATE_TRANSACTION_SUCCESS';
export const CREATE_TRANSACTION_FAILURE = 'CREATE_TRANSACTION_FAILURE';

const createTransaction = reqParams => ({
  [CALL_API]: {
    endpoint: 'transactions',
    reqParams,
    types: [
      CREATE_TRANSACTION_REQUEST,
      CREATE_TRANSACTION_SUCCESS,
      CREATE_TRANSACTION_FAILURE,
    ],
  },
});
export const createTransactionRequest = values => dispatch =>
  dispatch(createTransaction(values));

// PUT: UPDATE
export const UPDATE_TRANSACTION_REQUEST = 'UPDATE_TRANSACTION_REQUEST';
export const UPDATE_TRANSACTION_SUCCESS = 'UPDATE_TRANSACTION_SUCCESS';
export const UPDATE_TRANSACTION_FAILURE = 'UPDATE_TRANSACTION_FAILURE';

const updateTransaction = reqParams => ({
  [CALL_API]: {
    endpoint: `transactions/${reqParams.id}`,
    reqParams,
    types: [
      UPDATE_TRANSACTION_REQUEST,
      UPDATE_TRANSACTION_SUCCESS,
      UPDATE_TRANSACTION_FAILURE,
    ],
  },
});
export const updateTransactionRequest = values => dispatch =>
  dispatch(updateTransaction(values));

// DELETE
export const DELETE_TRANSACTION_REQUEST = 'DELETE_TRANSACTION_REQUEST';
export const DELETE_TRANSACTION_SUCCESS = 'DELETE_TRANSACTION_SUCCESS';
export const DELETE_TRANSACTION_FAILURE = 'DELETE_TRANSACTION_FAILURE';

const deleteTransaction = reqParams => ({
  [CALL_API]: {
    endpoint: `transactions/${reqParams.id}`,
    reqParams,
    types: [
      DELETE_TRANSACTION_REQUEST,
      DELETE_TRANSACTION_SUCCESS,
      DELETE_TRANSACTION_FAILURE,
    ],
  },
});
export const deleteTransactionRequest = values => dispatch =>
  dispatch(deleteTransaction(values));
