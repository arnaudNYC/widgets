import { connect } from 'react-redux';
import Transactions from '../components/Transactions';
import {
  createTransactionRequest,
  deleteTransactionRequest,
  loadTransactionsRequest,
  updateTransactionRequest,
} from '../actions/transactionActions';

const mapStateToProps = ({ transactions }) => {
  // sorting every time here can be costly, use memoization (cf reselect on npmjs)
  const sortedTransactions = transactions.sort(
    ({ date: date1 }, { date: date2 }) => {
      if (date1 < date2) {
        return -1;
      }
      if (date1 > date2) {
        return 1;
      }
      return 0;
    },
  );
  return { transactions: sortedTransactions };
};

const mapDispatchToProps = {
  createTransactionRequest,
  deleteTransactionRequest,
  loadTransactionsRequest,
  updateTransactionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transactions);
