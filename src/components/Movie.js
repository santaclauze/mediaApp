import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import {
  Img,
  P,
  Badge,
  Small,
  Hr
} from '@bootstrap-styled/v4';

import MoviePlayer from './MoviePlayer';

// const MovieSelect = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: red;
// `;

const MovieImg = styled(Img)`
  min-height: 250px;
`;

class MovieUnstyled extends React.Component {

  static propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
    updatePreviouslyWatchedList: PropTypes.func,
  };

  state = {
    movieOpen : false,
    movieUrl: null,
    movieHover: false,
  };

  componentWillMount() {
    if(localStorage.getItem(this.props.data.id) === null) {
      this.setState({
        movieUrl: this.props.data.images[0].url
      })
    } else {
      this.setState({
        movieUrl: localStorage.getItem(this.props.data.id)
      })
    }
  }

  handleLoad = (image) => {
    if(localStorage.getItem(this.props.data.id) === null) {
      const imageBase64 = this.getBase64Image(image);
      localStorage.setItem(this.props.data.id, imageBase64)
    }
  };

  getBase64Image = (img) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // create new Image to assign image url
    const image = new Image();
    image.src = img;
    image.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    };

    const dataURL = canvas.toDataURL("image/jpeg");

    return dataURL;
  };


  handleCloseVideo = () => {
    const { updatePreviouslyWatchedList, data } = this.props;
    this.setState({
      movieOpen: false
    });
    updatePreviouslyWatchedList && updatePreviouslyWatchedList(data)
  };

  handleOpenVideo = () => {
    this.setState({
      movieOpen: true
    })
  };

  handleOnMouseOver = () => {
    this.setState({
      movieHover: true,
    })
  }

  handleOnMouseLeave = () => {
    this.setState({
      movieHover: false,
    })
  }

  render() {
    const { data, className } = this.props;
    const { movieUrl, movieHover } = this.state;
    const colorArray = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

    return (
      <Fragment>
        <div
            className={cn(className, 'movie-wrapper cursor-pointer')}
            onClick={this.handleOpenVideo}
            onMouseLeave={this.handleOnMouseLeave}
            onMouseOver={this.handleOnMouseOver}
        >
          <MovieImg
              src={movieUrl}
              onLoad={this.handleLoad(MovieImg)}
              alt={movieUrl}
              className="cursor-pointer"
          />
          {movieHover && (
            <div className="movie-description text-white">
              <P>{data.title}</P>
              <Small>{data.description}</Small>
              <Hr />
              <Small>Rating: {data.parentalRatings[0].rating}</Small>
              <Hr />
              {data.categories.map(category =>
                <Badge
                  className="ml-1"
                >
                  {category.title}
                </Badge>
              )}
            </div>
          )}
          <P className="text-white">{data.title}</P>
        </div>
        {this.state.movieOpen ? ReactDOM.createPortal(
          <MoviePlayer close={this.handleCloseVideo} movieContent={data.contents[0]} />,
          document.body
        ) : null}
      </Fragment>
    );
  }
}

const Movie = styled(MovieUnstyled)`
  &.movie-wrapper {
    position: relative;

    .movie-description {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

`;

export default Movie;