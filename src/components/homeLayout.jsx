import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class HomeLayout extends Component {
  render() {
    return (
      <div>
          <Header />
            {this.props.children}
          <Footer {...this.props} />
      </div>
    );
  }
}

export default HomeLayout;
