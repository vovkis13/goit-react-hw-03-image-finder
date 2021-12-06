import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import fetchImages from '../API/fetchImages';
import Searchbar from '../Searchbar/';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import s from './App.module.css';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    total: 0,
    collection: [],
    loading: false,
    currentImage: '',
  };

  handleSubmit = async e => {
    if (!e.target[1].value) return;
    e.preventDefault();
    this.setState({ loading: true });
    const res = await fetchImages(e.target[1].value, this.state.page).catch(
      console.log,
    );
    this.setState({
      page: 1,
      total: res.total,
      query: e.target[1].value,
      collection: res.hits,
      loading: false,
    });
  };

  handleLoadMore = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const extraImages = await fetchImages(this.state.query, this.state.page + 1)
      .then(res => res.hits)
      .catch(console.log);
    this.setState(prevState => ({
      page: prevState.page + 1,
      collection: [...prevState.collection, ...extraImages],
      loading: false,
    }));
  };

  handleImageMaximize = async ({ target }) => {
    const currentImage = this.state.collection.find(
      ({ id }) => id === Number(target.id),
    );
    this.setState({ currentImage });
  };

  handleCloseModal = () => this.setState({ currentImage: null });

  render() {
    const { total, collection, loading, currentImage } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          collection={collection}
          onMaximize={this.handleImageMaximize}
        />
        {loading && (
          <div className={s.loaderWrapper}>
            <Loader type="Rings" color="#00BFFF" height={120} width={120} />
          </div>
        )}
        {collection.length > 0 && total > collection.length && (
          <Button handleClick={this.handleLoadMore} />
        )}
        {currentImage && (
          <Modal image={currentImage} closeModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
