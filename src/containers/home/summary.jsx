import React, { Component } from 'react';
import { connect } from 'dva';

import Chart from '../../components/Chart';
import HomeLayout from '../../components/homeLayout';
class Summary extends Component {
  render() {
    const { status, data } = this.props.summary;
    return (
      <div>
        <HomeLayout currentTab="summary">
          <Chart data={data} />
        </HomeLayout>
      </div>
    );
  }
}

export default connect(({ summary }) => ({ summary }))(Summary);
