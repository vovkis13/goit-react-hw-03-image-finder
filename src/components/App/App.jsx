import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Searchbar from '../Searchbar/';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
// import Modal from '../Modal';

import s from './App.module.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23902018-2ad96957ecb94a5813d6bfdc3';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    collection: [],
    loading: false,
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.state.query = e.target[1].value;
    const collection = await fetch(
      `${BASE_URL}?q=${this.state.query}&page=${e.target[1].value}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(data => data.hits)
      .catch(console.log);
    this.setState({
      page: 1,
      query: e.target[1].value,
      collection,
      loading: false,
    });
  };

  handleLoadMore = async e => {
    e.preventDefault();
    const extraImages = await fetch(
      `${BASE_URL}?q=${this.state.query}&page=${
        this.state.page + 1
      }&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(data => data.hits)
      .catch(console.log);
    this.setState(prevState => ({
      page: prevState.page + 1,
      collection: [...prevState.collection, ...extraImages],
    }));
  };

  handleImageMaximize = async e => {};
  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          collection={this.state.collection}
          onMaximize={this.handleImageMaximize}
        />
        {this.state.loading && (
          <div className={s.loaderWrapper}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        )}
        {this.state.collection.length > 0 &&
          !(this.state.collection.length < 12) && (
            <Button handleClick={this.handleLoadMore} />
          )}

        {/* <Modal /> */}
      </div>
    );
  }
}
