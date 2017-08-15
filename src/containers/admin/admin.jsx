import React, { Component } from 'react';

import { Link } from 'dva/router';

import { connect } from 'dva';

import Welcome from '../../components/Welcome';

import '../../styles/admin.less';

class Admin extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Link to="/login">login</Link>
      </div>
    );
  }
}

export default connect(({ admin }) => ({ admin }))(Admin);
