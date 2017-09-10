import React, { Component } from 'react';

import { Link } from 'dva/router';

import { connect } from 'dva';

import { Button } from 'antd';
import MovieModal from '../../components/MovieModal';
import MovieTable from '../../components/MovieTable';

class Movie extends Component {
  state = {
    visible: false,
    currentData: '',
    list: [],
  };
  createMovie = () => {
    this.setState({
      visible: true,
    });
  }
  editMovie = cineId => {
    console.log('-----------------');
    console.log(cineId);
    this.setState({
      visible: true,
    });
  }
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const {
      visible,
      currentData,
      list,
    } = this.state;
    const {
      status,
      movies,
    } = this.props.admin;
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
          data={movies}
        />
        <MovieModal
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default connect(({ admin }) => ({ admin }))(Movie);
