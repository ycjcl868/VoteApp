import React, { Component } from 'react';

import { Link } from 'dva/router';

import { connect } from 'dva';

import AdminMovie from '../../components/AdminMovie';

import '../../styles/admin.less';

class Movie extends Component {
  render() {
    return (
      <div>
        <AdminMovie />
      </div>
    );
  }
}

export default connect(({ admin }) => ({ admin }))(Movie);
