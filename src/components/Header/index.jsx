import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';

import './header.less';

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavBar
          className="header"
          mode="dark"
          iconName={null}
        >
          电影投票系统
        </NavBar>
      </div>
    );
  }
}
