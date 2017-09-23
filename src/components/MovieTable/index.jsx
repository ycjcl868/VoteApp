import React, { Component } from 'react';

import { Table } from 'antd';

import { Icon } from '../../common';

import MovieModal from '../../components/MovieModal';

import './index.less';


class MovieTable extends Component {
  state = {
    visible: false,
  }
  editMovie(id) {
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
    const { visible } = this.state;
    const { data } = this.props;
    const columns = [{
      title: '电影名',
      dataIndex: 'cineName',
      key: 'cineName',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '海报',
      dataIndex: 'url',
      key: 'url',
      render: url => <img className="movie-img" src={url} />,
    }, {
      title: '上映时间',
      dataIndex: 'publishTime',
      key: 'publishTime',
    }, {
      title: '当前票数',
      dataIndex: 'ticket',
      key: 'ticket',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record, i) => (
        <span key={i}>
          <a href="#"><Icon type="xiangqing" />详情</a>
          <span className="ant-divider" />
          <a onClick={() => this.editMovie(record.id)} ><Icon type="xiugai" />修改</a>
          <MovieModal
            visible={visible}
            currentData={record}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          />
          <span className="ant-divider" />
          <a href="#"><Icon type="icon10" />删除</a>
        </span>
      ),
    }];
    return (
      <div className="admin-movie-table">
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default MovieTable;
