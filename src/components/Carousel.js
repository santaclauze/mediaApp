import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Movie from './Movie';

export default class Carousel extends React.Component {

  static propTypes = {
    movies: PropTypes.array,
    updatePreviouslyWatchedList: PropTypes.func,
  };


  render() {
    const { movies } = this.props;

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {movies && movies.map((movie, index) => <Movie updatePreviouslyWatchedList={this.props.updatePreviouslyWatchedList} data={movie} key={index} />)}
      </Slider>
    );
  }
}
