import React, { Component } from 'react';

import { Link } from 'dva/router';

import { connect } from 'dva';

import Welcome from '../../components/Welcome';

class Admin extends Component {
  render() {
    return (
      <div className="admin-content">
        <Welcome />
      </div>
    );
  }
}

export default connect(({ admin }) => ({ admin }))(Admin);
