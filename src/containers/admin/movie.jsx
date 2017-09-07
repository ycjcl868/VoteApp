import React, { Component } from 'react';

import { Link } from 'dva/router';

import { connect } from 'dva';

import { Button } from 'antd';
import MovieModal from '../../components/MovieModal';
import MovieTable from '../../components/MovieTable';

import '../../styles/admin.less';

class Movie extends Component {
  state = {
    visible: false,
    currentData: '',
  }
  createMovie = () => {
    this.setState({
      visible: true,
    });
  }
  editMovie = (data) => {
    console.log('-----------------');
    console.log(data);
    this.setState({
      visible: true,
      currentData: data,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const { visible, currentData } = this.state;
    return (
      <div className="admin-content">
        <div className="admin-content-movie-btn">
          <Button
            className="movie-btn"
            type="primary"
            onClick={this.createMovie}
          >新建电影</Button>
        </div>
        <MovieTable
          editMovie={this.editMovie}
        />
        <MovieModal
          visible={visible}
          currentData={currentData}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default connect(({ admin }) => ({ admin }))(Movie);
