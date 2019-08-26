import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import CssBaseline from '@material-ui/core/CssBaseline';
// eslint-disable-next-line
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { fetchTradingData } from '../../actions/trading';
import { fetchOrder } from '../../actions/order';
import TradingView from '../../components/TradingView';
import OrderForm from '../../components/OrderForm';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

class TradingviewPage extends Component {

  state = { priceBuy: '', amountBuy: '', priceSell: '', amountSell: '' };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchOrder(this.state.priceBuy, this.state.amountBuy, 'buy');
  };

  onSubmitSell = e => {
    e.preventDefault();
    this.props.fetchOrder(this.state.priceSell, this.state.amountSell, 'sell');
  };

  handleChangeField = (field, value) => this.setState({ [field]: value });

  componentDidMount() {
    // this.props.fetchTradingData();

  }

  render () {
    // eslint-disable-next-line
    const { classes, tradingIsFetching, data, priceBuy, amountBuy, priceSell, amountSell } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        {/*<Typography component="h1" variant="h5">TragingView</Typography>*/}
        {/*{!tradingIsFetching && !!data.length && (<TradingView data={data}/>)}*/}
        <TradingView/>

        <div style={{ display: 'flex', }}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">Buy</Typography>
            <OrderForm
              price={priceBuy}
              amount={amountBuy}
              onChange={this.handleChangeField}
              onSubmit={this.onSubmit}
              // error={error}
              btnName={'Buy'}
            />
          </Paper>

          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">Sell</Typography>
            <OrderForm
              price={priceSell}
              amount={amountSell}
              onChange={this.handleChangeField}
              onSubmit={this.onSubmitSell}
              // error={error}
              btnName={'Sell'}
            />
          </Paper>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.trading.list,
    tradingIsFetching: state.trading.isFetching,
    error: state.order.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTradingData: () => dispatch(fetchTradingData()),
    fetchOrder: () => dispatch(fetchOrder()),
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(TradingviewPage);
