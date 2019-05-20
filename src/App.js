import React from 'react';

import {
  Hr,
  H2,
} from '@bootstrap-styled/v4';

import Header from './components/Header';
import Carousel from './components/Carousel';

export default class App extends React.Component {

  state = {
    data: null,
    previouslyWatched: [],
  };

  componentDidMount() {
    this.fetchData()
  }

  handleRefreshClick = () => {
    this.fetchData()
  }

  fetchData = () => {
    fetch('https://demo2697834.mockable.io/movies')
      .then(res => res.json())
      .then(body => this.saveData(body))
  };

  saveData = (data) => {
    this.setState({
      data: data,
    });
  };

  handleUpdatePreviouslyWatched = (movieId, movie) => {
    console.log('updating previously watched');
    const previouslyWatchedMovieList = this.state.previouslyWatched;

    // Previous watched is empty
    if (previouslyWatchedMovieList.length === 0) {
      this.setState({
        previouslyWatched: [ ...this.state.previouslyWatched, movie]
      })
    }

    previouslyWatchedMovieList.map((previouslyWatchedMovie, index) => {
      if (movieId === previouslyWatchedMovie.id) {
        console.log(previouslyWatchedMovieList, index, index+1)
        previouslyWatchedMovieList.splice(index, index+1)
        console.log(previouslyWatchedMovieList)
        previouslyWatchedMovieList.unshift(movie)
        console.log(previouslyWatchedMovieList)
        return this.setState({
          previouslyWatched: previouslyWatchedMovieList
        })
      } else {
        console.log('adding a new watched movie at beginign of list', movie)
        console.log(previouslyWatchedMovieList)
        previouslyWatchedMovieList.unshift(movie)
        console.log(previouslyWatchedMovieList)
        return this.setState({
          previouslyWatched: previouslyWatchedMovieList
        })
      }


    })
  };

  render() {
    const { data, previouslyWatched } = this.state;
    return (
      <div className="App">
        <Header onRefreshClick={this.handleRefreshClick} />
        <H2>Featured Movies</H2>
        <Carousel movies={data && data.entries} updatePreviouslyWatchedList={this.handleUpdatePreviouslyWatched} />
        <Hr className="my-5" />
        <H2>Previously Watched Movies</H2>
        <Carousel movies={previouslyWatched} />
      </div>
    );
  }
}
