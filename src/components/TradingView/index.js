import React, { Component } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import withStyles from '@material-ui/core/styles/withStyles';
import moment from 'moment';

const styles = theme => ({
});

class TradingView extends Component {

  componentDidMount() {
    const data = this.props.data.map((item => {
      const time = moment.unix(item[0]).format('YYYY-MM-DD');
      return { time, open: item[1], high: item[2], low: item[3], close: item[4] };
    }));

    const chart = createChart(document.body, {
      width: 600,
      height: 300,
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });
    const lineSeries = chart.addCandlestickSeries();
    lineSeries.setData(data);
  }

  render () {
    return null;
  }
}

export default withStyles(styles)(TradingView);
