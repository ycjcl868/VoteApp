import React, { Component } from 'react';

import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

import { connect } from 'dva';

import AdminSider from '../components/AdminSider/';
import AdminNav from '../components/AdminNav/';
import Welcome from '../components/Welcome/';
import Footer from '../components/AdminFooter/';

import '../styles/admin.less';

class Admin extends Component {
  render() {
    return (
      <Layout className="ant-layout-has-sider admin-layout">
        <AdminSider />
        <Layout>
          <AdminNav />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
           <Welcome />
          </Content>
          <Footer />
        </Layout>

      </Layout>
    );
  }
}

export default connect(({ admin }) => ({ admin }))(Admin);
