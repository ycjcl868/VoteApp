import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Header from '../Components/Header.jsx';

class Index extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <p>{this.props.index.record}</p>
        <span>React</span>
        <Link to="/admin">管理员</Link>
      </div>
    );
  }
}

export default connect(({ index }) => ({ index }))(Index);
