import React, { Component } from 'react';
import { connect } from 'dva';


import NewsCard from '../../components/NewsCard';
import HomeLayout from '../../components/homeLayout';
class News extends Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <HomeLayout currentTab="news" {...this.props}>
          {logs && logs.map((log, i) =>
            <NewsCard
              key={i}
              {...log}
            />
          )}
        </HomeLayout>
      </div>
    );
  }
}

export default connect(state => ({
  news: state.news,
  logs: state.news.logs,
  logNum: state.index.logNum,
  status: state.news.status,
}))(News);
