import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

import '../styles/style.less';
class News extends Component {
  render() {
    console.log(this.props.news);
    const { status, logs } = this.props.news;
    return (
      <div>
        <Header />
        {logs && logs.map((log, i) =>
          <NewsCard
            key={i}
            ip={log.ip}
            time={log.time}
            num={log.num}
            movie={log.movie}
          />
        )}
        <Footer logNum={logs.length} currentTab="news" />
      </div>
    );
  }
}

export default connect(({ news }) => ({ news }))(News);
