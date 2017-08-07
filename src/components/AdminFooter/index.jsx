import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class AdminFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        Kylin King ©2017 Created by AntD
      </Footer>
    );
  }
}

