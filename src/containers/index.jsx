import React, { Component } from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';


import Header from '../components/Header';
import Banner from '../components/Banner';
import Search from '../components/Search';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

import '../styles/style.less';
class Index extends Component {
  render() {
    const { logNum, status } = this.props.index;
    return (
      <div>
          <Header />
          <Banner />
          <Search />
          <CardList {...this.props} />
          <Footer logNum={logNum} currentTab="index" />
      </div>
    );
  }
}

export default connect(({ index }) => ({ index }))(Index);
