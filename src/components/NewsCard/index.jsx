import React, { Component } from 'react';
import { Badge } from 'antd-mobile';


import { Icon } from '../../common';

import './newscard.less';

class NewsCard extends Component {
  render() {
    const { ip, time, num, movie } = this.props;
    return (
      <div className="newscard">
        <div className="vote-ip">
          <Icon className="newscard-icon" type="yonghu" />
          用户：{ip}
        </div>
        <div className="vote-time">
          <Icon className="newscard-icon" type="shijian" />
          时间：{time}
        </div>
        <div className="vote-num">
          <Icon className="newscard-icon" type="piaoshu" />
          票数：<Badge className="newscard-badge" text={`${num > 1000 ? '999+' : num}票`} />
       </div>
       <div className="vote-info">
         将宝贵的一票投给了<span className="vote-movie">{movie}</span>
       </div>
      </div>
    );
  }
}

export default NewsCard;
