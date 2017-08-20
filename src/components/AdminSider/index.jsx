import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

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
    const { currentPath } = this.props;
    console.log('-----currentPath------');
    console.log(this.props);
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu
          theme="dark"
          selectedKeys={[ currentPath ]}
          defaultSelectedKeys={[ 'index' ]}
          mode="inline"
        >
          <Menu.Item key="/dashboard">
            <Link to="/dashboard">
              <Icon type="pie-chart" />
              <span>主页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/movie">
            <Link to="/dashboard/movie">
              <Icon type="desktop" />
              <span>电影</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="log">
            <Icon type="file" />
            <span>日志</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default AdminSider;
