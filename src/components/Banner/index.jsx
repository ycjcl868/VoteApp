import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

import './banner.less';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        url: '',
        img: 'http://movie.ycjcl.cc/img/banner3.png',
      }, {
        url: '',
        img: 'http://movie.ycjcl.cc/img/banner2.png',
      }, {
        url: '',
        img: 'http://movie.ycjcl.cc/img/banner1.png',
      }],
      // initialHeight: 200,
    };
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div>
        <Carousel
          className="banner-carousel"
          autoplay={false}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item, i) => (
            <a href={item.url !== '' ? item.url : 'javascript:;'} key={i} style={hProp}>
              <img
                src={item.img}
                alt="icon"
                className="banner-img"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}
