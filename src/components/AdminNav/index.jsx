import React, { Component } from 'react';
import { Menu, Icon, Breadcrumb } from 'antd';
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
          <Menu.Item key="app" disabled>
            <Icon type="appstore" />菜单二
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />菜单三</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">菜单四</a>
          </Menu.Item>
        </Menu>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

