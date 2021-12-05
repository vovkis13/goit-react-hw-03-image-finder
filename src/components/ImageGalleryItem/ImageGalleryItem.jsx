import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, onMaximize }) {
  return (
    <li className={s.galleryItem}>
      <img
        className={s.image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={onMaximize}
      />
    </li>
  );
}
