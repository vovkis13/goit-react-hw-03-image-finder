import React from 'react';
import s from './Modal.module.css';

export default function Modal({ image }) {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
}
