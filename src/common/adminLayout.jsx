import React, { Component } from 'react';

import { Layout } from 'antd';
const { Content } = Layout;

import AdminSider from '../components/AdminSider/';
import AdminNav from '../components/AdminNav/';
import Footer from '../components/AdminFooter/';

class AdminLayout extends Component {
  render() {
    const { children, location: { pathname } } = this.props;
    return (
      <Layout className="ant-layout-has-sider admin-layout">
        <AdminSider currentPath={pathname} />
        <Layout>
          <AdminNav currentPath={pathname} />
          <Content style={{ margin: '0 16px' }}>
            {children}
          </Content>
          <Footer />
        </Layout>

      </Layout>
    );
  }
}

export default AdminLayout;
