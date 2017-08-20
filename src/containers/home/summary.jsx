import React, { Component } from 'react';
import { connect } from 'dva';

import { HomeLayout } from '../../common';
import Chart from '../../components/Chart';

import '../../styles/style.less';
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
