import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { browserHistory } from 'dva/router';


import { Icon } from '../common';

import './footer.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
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
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              browserHistory.push('/admin');
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            icon={<Icon className="footer-icon" type="dongtai" />}
            selectedIcon={<Icon className="footer-icon" type="dongtai" />}
            title="投票动态"
            key="投票动态"
            badge={5}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
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
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >

          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer;
