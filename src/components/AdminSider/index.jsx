import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class AdminSider extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>主页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>电影</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>电影</span></span>}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="8">
            <Icon type="file" />
            <span>日志</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default AdminSider;
