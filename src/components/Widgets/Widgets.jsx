import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import Widget from './Widget';
import WidgetForm from './WidgetForm';

const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  root: {
    margin: '0 auto',
    padding: theme.spacing.unit * 3,
  },
});

const Widgets = ({
  classes,
  createWidgetRequest,
  deleteWidgetRequest,
  updateWidgetRequest,
  widgets,
}) => {
  return (
    <div className={classes.root}>
      <Grid className={classes.container} container spacing={16}>
        <Grid item xs={12}>
          <Grid
            alignItems="center"
            container
            direction="row"
            justify="center"
            spacing={16}
          >
            {widgets.map(widget => (
              <Widget
                key={`${widget.id}-${widget.lastUpdatedAt}`}
                actions={{
                  deleteWidgetRequest,
                  updateWidgetRequest,
                }}
                {...widget}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <WidgetForm actions={{ createWidgetRequest }} />
        </Grid>
      </Grid>
    </div>
  );
};

Widgets.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  createWidgetRequest: PropTypes.func.isRequired,
  deleteWidgetRequest: PropTypes.func.isRequired,
  updateWidgetRequest: PropTypes.func.isRequired,
  widgets: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['METAL', 'PLASTIC']).isRequired,
    }).isRequired,
  ).isRequired,
};

export default withStyles(styles)(Widgets);
