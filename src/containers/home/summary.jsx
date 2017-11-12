import React, { Component } from 'react';
import { connect } from 'dva';

import Chart from '../../components/Chart';
import HomeLayout from '../../components/homeLayout';
class Summary extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <HomeLayout currentTab="summary" {...this.props}>
          <Chart data={data} {...this.props} />
        </HomeLayout>
      </div>
    );
  }
}

export default connect(state => ({
  summary: state.summary,
  data: state.summary.data,
  status: state.summary.status,
  logNum: state.index.logNum,
}))(Summary);
