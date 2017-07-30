import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

export default class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar placeholder="搜索" />
      </div>
    );
  }
}

