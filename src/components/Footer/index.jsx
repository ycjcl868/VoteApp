import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { hashHistory } from 'dva/router';


import { Icon } from '../../common';

import './footer.less';

class Footer extends Component {
  render() {
    const { logNum = 0 } = this.props;
    console.log('---footer-----');
    console.log(this.props);

    return (
      <div className="footer">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="电影列表"
            key="电影列表"
            icon={<Icon className="footer-icon" type="dianying" />}
            selectedIcon={<Icon className="footer-icon" type="dianying" />}
            selected={this.props.currentTab === 'index'}
            onPress={() => {
              hashHistory.push('/');
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            icon={<Icon className="footer-icon" type="dongtai" />}
            selectedIcon={<Icon className="footer-icon" type="dongtai" />}
            title="投票动态"
            key="投票动态"
            badge={logNum}
            selected={this.props.currentTab === 'news'}
            onPress={() => {
              hashHistory.push('/news');
            }}
          >

          </TabBar.Item>
          <TabBar.Item
            icon={
              <Icon className="footer-icon" type="tongji-copy" />
            }
            selectedIcon={
              <Icon className="footer-icon" type="tongji-copy" />
            }
            title="票数统计"
            key="票数统计"
            selected={this.props.currentTab === 'summary'}
            onPress={() => {
              hashHistory.push('/summary');
            }}
          >

          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer;
