import React, { Component } from 'react';

import { Table } from 'antd';

import { Icon } from '../../common';


class MovieTable extends Component {
  mapKeyToData(key) {
    this.props.editMovie(key);
  }
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#"><Icon type="xiangqing" />详情</a>
          <span className="ant-divider" />
          <a onClick={() => this.mapKeyToData(record.key)} ><Icon type="xiugai" />修改</a>
          <span className="ant-divider" />
          <a href="#"><Icon type="icon10" />删除</a>
        </span>
      ),
    }];

    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default MovieTable;
