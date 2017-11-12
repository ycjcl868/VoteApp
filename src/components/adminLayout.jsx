import React, { Component } from 'react';

import { Layout } from 'antd';
const { Content } = Layout;

import AdminSider from './AdminSider/';
import AdminNav from './AdminNav/';
import Footer from './AdminFooter/';

class AdminLayout extends Component {
  render() {
    const { children, location: { pathname } } = this.props;
    return (
      <Layout className="ant-layout-has-sider admin-layout">
        <AdminSider currentPath={pathname} {...this.props} />
        <Layout>
          <AdminNav currentPath={pathname} {...this.props} />
          <Content {...this.props} style={{ margin: '0 16px' }}>
            {children}
          </Content>
          <Footer />
        </Layout>

      </Layout>
    );
  }
}

export default AdminLayout;
