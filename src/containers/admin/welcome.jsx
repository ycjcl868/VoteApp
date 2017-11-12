import React, { Component } from 'react';

import { Link } from 'dva/router';

import { connect } from 'dva';

import Welcome from '../../components/Welcome';

class Admin extends Component {
  render() {
    return (
      <div className="admin-content">
        <Welcome {...this.props} />
      </div>
    );
  }
}

export default connect(state => ({
  admin: state.admin,
  status: state.admin.status,
  record: state.admin.record,
  current: state.admin.current,
  movies: state.admin.movies,
}))(Admin);
