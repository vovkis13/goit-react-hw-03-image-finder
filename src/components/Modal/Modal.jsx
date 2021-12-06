import React from 'react';
import s from './Modal.module.css';
export default function Modal({ image, closeModal }) {
  const { largeImageURL, tags } = image;

  return (
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <img className={s.image} src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}
