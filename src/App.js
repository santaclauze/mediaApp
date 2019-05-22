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

  componentDidUpdate() {
    // console.log('componentDidUpdate images')
    // if(localStorage.getItem('images') === null) {
    //   console.log('no images')
    //   this.saveImagesToCache(this.state.data.entries);
    // }
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

  // saveImagesToCache = (movieList) => {
  //   console.log(movieList)
  //
  //   movieList.map(movie => this.getBase64ImageFromUrl(movie.images[0].url))
  // }
  //
  // getBase64ImageFromUrl = async imageUrl => {
  //   const res = await fetch(imageUrl);
  //   const blob = await res.blob();
  //   console.log(res, blob)
  //
  //   return new Promise((resolve, reject) => {
  //     const reader  = new FileReader();
  //     reader.addEventListener("load", function () {
  //       resolve(reader.result);
  //     }, false);
  //
  //     reader.onerror = () => {
  //       return reject(this);
  //     };
  //     reader.readAsDataURL(blob);
  //   })
  // }

  handleUpdatePreviouslyWatched = (movie) => {
    const previouslyWatchedMovieList = this.state.previouslyWatched;
    switch(previouslyWatchedMovieList.length) {
      case 0:
        previouslyWatchedMovieList.push(movie);
        this.setState({
          previouslyWatched: previouslyWatchedMovieList
        });
        break;
      case 1:
        if(movie.id !== previouslyWatchedMovieList[0].id) {
          previouslyWatchedMovieList.unshift(movie);
          this.setState({
            previouslyWatched: previouslyWatchedMovieList
          });
        };
        break;
      default:
        const movieNeverWatched = previouslyWatchedMovieList.find(previouslyWatchedMovie => movie.id === previouslyWatchedMovie.id)
        if(movieNeverWatched === undefined) {
          previouslyWatchedMovieList.unshift(movie);
          return this.setState({
            previouslyWatched: previouslyWatchedMovieList
          })
        } else {
          previouslyWatchedMovieList.map((previouslyWatchedMovie, index) => {
            if (movie.id === previouslyWatchedMovie.id) {
              previouslyWatchedMovieList.splice(index, index+1);
              previouslyWatchedMovieList.unshift(movie);
              return this.setState({
                previouslyWatched: previouslyWatchedMovieList
              })
            }
          })
        }
    }
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
        <Carousel movies={previouslyWatched} updatePreviouslyWatchedList={this.handleUpdatePreviouslyWatched} />
      </div>
    );
  }
}
