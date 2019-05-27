import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Img,
  P
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
  position: relative;
`;

export default class Movie extends React.Component {

  static propTypes = {
    data: PropTypes.object,
    updatePreviouslyWatchedList: PropTypes.func,
  };

  state = {
    movieOpen : false,
    movieUrl: null,
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

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <MovieImg src={this.state.movieUrl} onLoad={this.handleLoad(MovieImg)} alt={this.state.movieUrl} className="cursor-pointer" onClick={this.handleOpenVideo} />
        <P className="text-white">{data.title}</P>
        {this.state.movieOpen ? ReactDOM.createPortal(
          <MoviePlayer close={this.handleCloseVideo} movieContent={data.contents[0]} />,
          document.body
        ) : null}
        {/*<MovieSelect/>*/}
      </Fragment>
    );
  }
}
