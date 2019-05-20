import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Img,
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
    data: PropTypes.object
  };

  state = {
    movieOpen : false,
  };

  handleCloseVideo = () => {
    console.log('closing video');
    const { updatePreviouslyWatchedList, data } = this.props;
    this.setState({
      movieOpen: false
    });
    updatePreviouslyWatchedList && updatePreviouslyWatchedList(data.id, data )
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
        <MovieImg src={data.images[0].url} className="cursor-pointer" onClick={this.handleOpenVideo} />
        {this.state.movieOpen ? ReactDOM.createPortal(
          <MoviePlayer close={this.handleCloseVideo} movieContent={data.contents[0]} />,
          document.body
        ) : null}
        {/*<MovieSelect/>*/}
      </Fragment>
    );
  }
}
