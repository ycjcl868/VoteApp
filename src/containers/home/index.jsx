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
          <HomeLayout currentTab="index">
            <Banner />
            <Search />
            <CardList {...this.props} />
            <Divider />
          </HomeLayout>
      </div>
    );
  }
}

export default connect(({ index }) => ({ index }))(Index);
