import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Paper,
  MenuItem,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { format } from 'date-fns';

const styles = theme => ({
  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing.unit * 2,
  },
  root: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: '960px',
    padding: theme.spacing.unit * 2,
  },
});

const Transaction = ({ actions, id, date, name, amount, type }) => {
  const [values, setValues] = useState({
    amount,
    date,
    deleted: false,
    id,
    name,
    type,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    !values.deleted && (
      <form>
        <Grid container justify="center" spacing={24}>
          <Grid item>
            <TextField
              id="date"
              label="Date"
              onChange={handleChange('date')}
              type="date"
              value={values.date}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name"
              label="Name"
              onChange={handleChange('name')}
              type="text"
              value={values.name}
            />
          </Grid>
          <Grid item>
            <TextField
              id="type"
              label="Type"
              onChange={handleChange('type')}
              select
              value={values.type}
            >
              {[
                { label: 'Expense', value: 'EXPENSE' },
                { label: 'Revenue', value: 'REVENUE' },
              ].map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              id="amount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              label="Amount"
              onChange={handleChange('amount')}
              type="number"
              value={values.amount}
            />
          </Grid>
          <Grid item>
            <Button onClick={() => actions.updateTransactionRequest(values)}>
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              onClick={() => actions.deleteTransactionRequest(values)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  );
};

const AddTransaction = ({ actions }) => {
  const newTransaction = {
    amount: '',
    date: format(new Date(), 'YYYY-MM-DD'),
    name: '',
    type: 'EXPENSE',
  };
  const [values, setValues] = useState(newTransaction);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form>
      <Grid container justify="center" spacing={24}>
        <Grid item>
          <TextField
            id="date"
            label="Date"
            onChange={handleChange('date')}
            type="date"
            value={values.date}
          />
        </Grid>
        <Grid item>
          <TextField
            id="name"
            label="Name"
            onChange={handleChange('name')}
            type="text"
            value={values.name}
          />
        </Grid>
        <Grid item>
          <TextField
            id="type"
            label="Type"
            onChange={handleChange('type')}
            select
            value={values.type}
          >
            {[
              { label: 'Expense', value: 'EXPENSE' },
              { label: 'Revenue', value: 'REVENUE' },
            ].map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item>
          <TextField
            id="amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            label="Amount"
            onChange={handleChange('amount')}
            type="number"
            value={values.amount}
          />
        </Grid>
        <Grid item>
          <Button
            color="primary"
            onClick={() => actions.createTransactionRequest(values)}
          >
            Add Transaction
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const Transactions = ({
  classes,
  createTransactionRequest,
  deleteTransactionRequest,
  loadTransactionsRequest,
  transactions,
  updateTransactionRequest,
}) => {
  const balance = transactions.reduce(
    (acc, transaction) => {
      let credit = 1;
      const amount = +transaction.amount;
      // total savings
      if (transaction.type === 'REVENUE') {
        acc.credit += amount;
      } else {
        acc.debit += amount;
        credit = -1;
      }
      acc.total += amount * credit;

      // yearly savings
      const year = format(transaction.date, 'YYYY');
      if (!acc.yearlySavings[year]) {
        acc.yearlySavings[year] = 0;
      }
      acc.yearlySavings[year] += amount * credit;

      // // monthly savings
      const yearmonth = format(transaction.date, 'YYYY/MM');
      if (!acc.monthlySavings[yearmonth]) {
        acc.monthlySavings[yearmonth] = 0;
      }
      acc.monthlySavings[yearmonth] += amount * credit;

      return acc;
    },
    {
      credit: 0,
      debit: 0,
      monthlySavings: {},
      total: 0,
      yearlySavings: {},
    },
  );
  const averageMonthlySavings = Number.parseFloat(
    Object.keys(balance.monthlySavings || []).reduce(
      (acc, b) => acc + balance.monthlySavings[b],
      0,
    ) / (Object.keys(balance.monthlySavings || []).length || 1),
  ).toFixed(2);

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Transactions</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <AddTransaction
              actions={{ createTransactionRequest, loadTransactionsRequest }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {transactions.map(transaction => (
              <Transaction
                key={transaction.id}
                actions={{
                  deleteTransactionRequest,
                  loadTransactionsRequest,
                  updateTransactionRequest,
                }}
                {...transaction}
              />
            ))}
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6">Balances</Typography>
            <Typography variant="body1">
              {`Total Spent: $ ${balance.debit}`}
            </Typography>
            <Typography variant="body1">
              {`Total Earned: $ ${balance.credit}`}
            </Typography>
            <Typography variant="body1">
              {`Net Worth: $ ${balance.credit - balance.debit}`}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6">Yearly Savings</Typography>
            <Typography variant="body1">
              Total Saved Yearly:
              {Object.keys(balance.yearlySavings)
                .sort()
                .map(year => (
                  <span key={year}>
                    <br />
                    {`${year}: $${balance.yearlySavings[year]}`}
                  </span>
                ))}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6">Monthly Savings</Typography>
            <Typography variant="body1">
              Total Saved Monthly:
              {Object.keys(balance.monthlySavings)
                .sort()
                .map(yearMonth => (
                  <span key={yearMonth}>
                    <br />
                    {`${yearMonth}: $${balance.monthlySavings[yearMonth]}`}
                  </span>
                ))}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6">Forecast</Typography>
            <Typography variant="body1">{`You save on average: $${averageMonthlySavings} a month`}</Typography>
            <Typography variant="body1">
              At this pace, your savings will be:
            </Typography>
            {Array.from({ length: 12 }, (v, i) => i + 1).map(month => (
              <span key={month}>
                {`In ${month} month: $${balance.credit -
                  balance.debit +
                  month * averageMonthlySavings}`}
                <br />
              </span>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Transactions.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  createTransactionRequest: PropTypes.func.isRequired,
  deleteTransactionRequest: PropTypes.func.isRequired,
  loadTransactionsRequest: PropTypes.func.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired, // one of EXPENSE/REVENUE
    }).isRequired,
  ).isRequired,
  updateTransactionRequest: PropTypes.func.isRequired,
};

Transaction.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

AddTransaction.propTypes = {
  actions: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Transactions);
