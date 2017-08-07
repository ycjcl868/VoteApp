import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

import '../styles/style.less';
class News extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewsCard
          ip="127.0.0.1"
          time="2017-07-31 22:48:31"
          num="5"
          movie="wtc"
        />
        <Footer currentTab="news" />
      </div>
    );
  }
}

export default connect(({ index }) => ({ index }))(News);
