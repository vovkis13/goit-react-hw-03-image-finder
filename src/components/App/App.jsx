import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Searchbar from '../Searchbar/';
import ImageGallery from '../ImageGallery';
// import Button from '../Button';
// import Modal from '../Modal';

import s from './App.module.css';

export default class App extends Component {
  state = {};
  handleSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
        {/* <Button /> */}
        {/* <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}
