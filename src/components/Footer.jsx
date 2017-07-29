import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

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
            icon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="koubei-o" size="md" />}
            selectedIcon={<Icon type="koubei" size="md" />}
            title="投票动态"
            key="投票动态"
            badge={'new'}
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
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            title="票数统计"
            key="票数统计"
            dot
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
