import React, { Component } from 'react';
import { connect } from 'dva';


import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/style.less';
class HomeLayout extends Component {
  render() {
    const { logNum, status } = this.props.layout;
    const currentTab = this.props.currentTab;
    return (
      <div>
          <Header />
            {this.props.children}
          <Footer logNum={logNum} currentTab={currentTab} />
      </div>
    );
  }
}

export default connect(({ layout }) => ({ layout }))(HomeLayout);
