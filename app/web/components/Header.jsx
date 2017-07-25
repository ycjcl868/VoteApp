import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';

import { Icon } from '../common';

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavBar
          leftContent="back"
          mode="dark"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon type="menu" />,
          ]}
        >
          电影投票系统
        </NavBar>
      </div>
    );
  }
}
