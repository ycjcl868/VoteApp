import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const { type, className, style } = this.props;
    const iconClassName = classNames({
      [className]: !!className,
      iconfont: true,
      [`icon-${type}`]: true,
    });
    return <i className={iconClassName} style={style} />
  }
}

Icon.propTypes = {
  classnames: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
