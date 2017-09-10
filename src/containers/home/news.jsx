import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import NewsCard from '../../components/NewsCard';
import HomeLayout from '../../components/homeLayout';
class News extends Component {
  render() {
    console.log(this.props.news);
    const { status, logs } = this.props.news;
    return (
      <div>
        <HomeLayout currentTab="news">
          {logs && logs.map((log, i) =>
            <NewsCard
              key={i}
              ip={log.ip}
              time={log.time}
              num={log.num}
              movie={log.movie}
            />
          )}
        </HomeLayout>
      </div>
    );
  }
}

export default connect(({ news }) => ({ news }))(News);
