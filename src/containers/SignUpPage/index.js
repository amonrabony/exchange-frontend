import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import LoginForm from '../../components/LoginForm';
import actions from "../../actions";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  }
});

class SignUpPage extends Component {
  state = { email: '', password: '' };

  onSubmit = e => {
    e.preventDefault();
    this.props.actions.fetchSignUp(this.state.email, this.state.password);
  };

  handleChangeField = (field, value) => this.setState({ [field]: value });

  render () {
    const { classes, error } = this.props;
    const { email, password } = this.state;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">Sign up</Typography>
          <LoginForm
            email={email}
            password={password}
            onChange={this.handleChangeField}
            onSubmit={this.onSubmit}
            error={error}
            btnAction={'Sign up'}
          />
          <Link to="/login" style={{ marginTop: 16, color: 'red', fontSize: 24, }}>Login</Link>
        </Paper>
      </main>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(state => ({
    error: state.auth.errorSignUp
  }), actions))(SignUpPage);
