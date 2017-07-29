import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Index extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <Banner />
        <p>{this.props.index.record}</p>
        <span>React</span>
        <Link to="/admin">管理员</Link>
        <Footer />
      </div>
    );
  }
}

export default connect(({ index }) => ({ index }))(Index);
