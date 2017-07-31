import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import Header from '../components/Header.jsx';
import Chart from '../components/Chart.jsx';
import Footer from '../components/Footer.jsx';

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
