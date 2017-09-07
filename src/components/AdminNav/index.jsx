import React, { Component } from 'react';
import { Menu, Icon, Breadcrumb } from 'antd';
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './index.less';
export default class AdminNav extends Component {
  state = {
    current: 'mail',
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const { currentPath } = this.props;
    const pathArr = currentPath.split('/').slice(1) || [];
    const displayPath = {
      dashboard: '控制台',
      movie: '电影',
    };
    console.log();
    return (
      <div className="adminNav">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[ this.state.current ]}
          mode="horizontal"
          className="adminNav-ul"
        >
          <Menu.Item key="mail">
            <Icon type="mail" />菜单一
          </Menu.Item>
        </Menu>

        <Breadcrumb
          className="bread-nav"
        >
          {pathArr.map((path, i) =>
            <Breadcrumb.Item key={i}><Link to={path}>{displayPath[path]}</Link></Breadcrumb.Item>
          )}
        </Breadcrumb>
      </div>
    );
  }
}

