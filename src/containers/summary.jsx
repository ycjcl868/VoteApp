import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import Header from '../components/Header';
import Chart from '../components/Chart';
import Footer from '../components/Footer';

import '../styles/style.less';
class Summary extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <Chart />
        <Footer currentTab="summary" />
      </div>
    );
  }
}

export default connect(({ index }) => ({ index }))(Summary);
