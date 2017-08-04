import React, { Component } from 'react';

import { Flex } from 'antd-mobile';

import { Card } from '../common';

import './cardlist.less';

class CardList extends Component {
  render() {
    const {
      index: { movies: movieList },
    } = this.props;

    return (
      <Flex
        justify="start"
        wrap="wrap"
      >
         {movieList && movieList.map((movie, i) =>
            <Card
              key={i}
              cineId={movie.cineId}
              title={movie.cineName}
              voteNum={movie.ticket}
              publishDate={movie.publishTime}
              description={movie.des}
              category={movie.type}
            />
         )}
     </Flex>
    );
  }
}


export default CardList;
