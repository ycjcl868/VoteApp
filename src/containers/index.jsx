import React, { Component } from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';


import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import Search from '../components/Search.jsx';
import CardList from '../components/CardList.jsx';
import Footer from '../components/Footer.jsx';

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
