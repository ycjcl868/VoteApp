import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

class Admin extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.admin.record}</p>

        <Link to="/">返回主页</Link>
      </div>
    );
  }
}

export default connect(({ admin }) => ({ admin }))(Admin);
