import React, { Component } from 'react';
import { connect } from 'dva';

import { Divider } from '../../common';
import HomeLayout from '../../components/homeLayout';
import Banner from '../../components/Banner';
import Search from '../../components/Search';
import CardList from '../../components/CardList';
class Index extends Component {
  render() {
    return (
      <div>
          <HomeLayout currentTab="index" {...this.props}>
            <Banner />
            <Search />
            <CardList {...this.props} />
            <Divider />
          </HomeLayout>
      </div>
    );
  }
}

export default connect(state => ({
  index: state.index,
  movies: state.index.movies,
  logNum: state.index.logNum,
  status: state.index.status,
}))(Index);
