import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography/Typography";


const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class OrderForm extends Component {
  onChange = field => e => this.props.onChange(field, e.target.value.trim());

  render () {
    const { classes, price, amount, btnName, onSubmit, error, type } = this.props;

    return (
      <form className={classes.form} onSubmit={onSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={this.onChange('price' + type)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={this.onChange('amount' + type)}
          />
        </FormControl>
        <Typography variant="h6" style={{padding: 10, color: 'red', fontSize: '12px', textAlign: 'center'}}>
          {error}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {btnName}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(OrderForm);
