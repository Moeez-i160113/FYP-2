import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function WeeklyDeposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Weekly Deposits</Title>
      <Typography component="p" variant="h6">
        Rs 3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 1 March, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}