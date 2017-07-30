import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Flex, Badge, Button, Modal } from 'antd-mobile';

import { Icon } from '../common';

import './card.less';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: false,
    };
  }
  showModel = () => e => {
    e.preventDefault();
    this.setState({
      model: true,
    });
  }
  onClose = () => () => {
    this.setState({
      model: false,
    });
  }
  render() {
    const {
      title,
      voteNum,
      publishDate,
      description,
      category,
      className,
      style,
    } = this.props;
    const cardClassName = classNames({
      [className]: !!className,
      'card-list': true,
    });
    return (
      <div>
        <Flex
          wrap="wrap"
          justify="start"
          style={style}
          className={cardClassName}
        >
          <div className="card-list-item">
            <div className="card-list-item-wrapper">
              <div className="card-list-item-img">
                <img src="http://movie.ycjcl.cc/img/banner3.png" alt=""/>
                <Badge className="badge-text" text={'新'} />
              </div>
              <div className="card-list-item-title">
                <p>{title}</p>
                <Badge className="badge-num" text={`${voteNum >= 100 ? '99+' : voteNum}票`} />
              </div>
              <div className="card-list-item-info">
                <p>发布时间：{publishDate}</p>
                <p>简介:{description}</p>
              </div>
              <div className="card-list-item-category">
                {category.map((item, i) =>
                  <Badge key={i} className="badge-category" text={item} />
                )}
              </div>
              <div className="card-list-item-btn-group">
                <Button type="ghost" onClick={this.showModel()} className="btn btn-brief" className="btn">
                  <Icon type="jianjie" />
                  查看简介
                </Button>
                <Modal
                  title={title}
                  transparent
                  maskClosable={false}
                  visible={this.state.model}
                  onClose={this.onClose()}
                  footer={[{ text: '我了解了', onPress: () => { this.onClose()(); } }]}
                >
                  <p className="model-description">{description}</p>
                </Modal>
                <Button type="primary" className="btn btn-vote">
                  <Icon type="dianzan" />
                  投它一票
                </Button>
              </div>
            </div>
          </div>
        </Flex>
      </div>
    );
  }
}

// Icon.propTypes = {
//   classnames: PropTypes.string,
//   type: PropTypes.string,
//   style: PropTypes.object,
// };

export default Card;
