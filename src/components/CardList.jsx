import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';

import { Card } from '../common';

import './cardlist.less';

class CardList extends Component {
  render() {
    return (
      <div className="cardlist">
        <WingBlank className="card-wingblank">
          <Card
            title="电影标题"
            voteNum={100}
            publishDate="2017-09-12"
            description="电影描述电影描述电影描述电影描述电影描述"
            category={[ '喜剧', '爱情' ]}

          />
        </WingBlank>
      </div>
    );
  }
}


export default CardList;
