import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Movie from './Movie';
import styled from 'styled-components';

class CarouselUnstyled extends React.Component {

  static propTypes = {
    movies: PropTypes.array,
    updatePreviouslyWatchedList: PropTypes.func,
  };


  render() {
    const { movies } = this.props;

    const settings = {
      infinite: true,
      dots: true,
      speed: 500,
      draggable: false,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings} className={this.props.className}>
        {movies && movies.map((movie, index) =>
          <Movie
            updatePreviouslyWatchedList={this.props.updatePreviouslyWatchedList}
            data={movie}
            key={index}
          />
        )}
      </Slider>
    );
  }
}

const Carousel = styled(CarouselUnstyled)`
  .slick-arrow {
    z-index: 9998
    &.slick-prev {
      left: 30px;
    }
    &.slick-next {
      right: 30px;
    }
  }
`;

export default Carousel
