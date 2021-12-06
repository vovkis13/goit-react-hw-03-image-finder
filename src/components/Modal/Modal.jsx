import React, { Component } from 'react';
import s from './Modal.module.css';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => e.code === 'Escape' && this.props.closeModal();

  render() {
    const { image, closeModal } = this.props;
    const { largeImageURL, tags } = image;
    return (
      <div className={s.overlay} onClick={closeModal}>
        <div className={s.modal}>
          <img className={s.image} src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
