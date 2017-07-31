import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import Header from '../components/Header.jsx';
import NewsCard from '../components/NewsCard.jsx';
import Footer from '../components/Footer.jsx';

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
