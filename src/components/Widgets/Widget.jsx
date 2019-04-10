import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  button: { margin: theme.spacing.unit },
  buttonContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const Widget = ({ actions, amount, classes, date, id, name, type }) => {
  const [state, setState] = useState({
    amount,
    date,
    id,
    name,
    type,
  });

  const handleChange = event => {
    const { value } = event.target;
    const nextValue = event.target.type === 'number' ? +value : value;
    setState({
      ...state,
      [event.target.name]: nextValue,
    });
  };

  const deleteWidget = () => {
    actions.deleteWidgetRequest(state.id);
  };
  const updateWidget = () => {
    actions.updateWidgetRequest(state);
  };

  return (
    <>
      <Grid item xs={2}>
        <TextField
          className={classes.textField}
          label="Name"
          margin="normal"
          name="name"
          onChange={handleChange}
          value={state.name}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          className={classes.textField}
          label="Date"
          margin="normal"
          name="date"
          onChange={handleChange}
          type="date"
          value={state.date}
        />
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth margin="normal">
          <InputLabel shrink>Type</InputLabel>
          <Select name="type" onChange={handleChange} value={state.type}>
            <MenuItem value="METAL">Metal</MenuItem>
            <MenuItem value="PLASTIC">Plastic</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <TextField
          className={classes.textField}
          label="Amount"
          margin="normal"
          name="amount"
          onChange={handleChange}
          type="number"
          value={state.amount}
        />
      </Grid>
      <Grid className={classes.buttonContainer} item xs={2}>
        <Button
          className={classes.button}
          onClick={updateWidget}
          variant="contained"
        >
          Update
        </Button>
      </Grid>
      <Grid className={classes.buttonContainer} item xs={2}>
        <Button
          className={classes.button}
          color="secondary"
          onClick={deleteWidget}
          variant="contained"
        >
          Delete
        </Button>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
    </>
  );
};

Widget.propTypes = {
  actions: PropTypes.shape({
    deleteWidgetRequest: PropTypes.func.isRequired,
    updateWidgetRequest: PropTypes.func.isRequired,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  classes: PropTypes.shape({}).isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['METAL', 'PLASTIC']).isRequired,
};

export default withStyles(styles)(Widget);
