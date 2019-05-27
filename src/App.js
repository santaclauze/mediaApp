import React from 'react';

import {
  Hr,
  H2,
} from '@bootstrap-styled/v4';

import Header from './components/Header';
import Carousel from './components/Carousel';
import Loader from './components/Loader';

export default class App extends React.Component {

  state = {
    data: null,
    previouslyWatched: [],
    isLoading: false,
  };

  componentWillMount() {
    this.fetchData()
  }
  componentDidMount() {
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
    this.setState({
      isLoading: true,
    });
    fetch('https://demo2697834.mockable.io/movies')
      .then(res => res.json())
      .then(body => this.saveData(body))
      .catch(error => console.error(error));
  };

  saveData = (data) => {
    this.setState({
      data: data,
      isLoading: false,
    });
    console.log(data)
  };

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
    const { data, previouslyWatched, isLoading } = this.state;

    return (
      <div className="App">
        <Header onRefreshClick={this.handleRefreshClick} />
        {isLoading ?
          <div className="d-flex align-items-center justify-content-around">
            <Loader />
          </div>
          :
          <React.Fragment>
             <H2>Featured Movies</H2>
             <Carousel movies={data && data.entries} updatePreviouslyWatchedList={this.handleUpdatePreviouslyWatched} />
          </React.Fragment>
        }
        <Hr className="my-5" />
        <H2>Previously Watched Movies</H2>
        <Carousel movies={previouslyWatched} updatePreviouslyWatchedList={this.handleUpdatePreviouslyWatched} />
      </div>
    );
  }
}
