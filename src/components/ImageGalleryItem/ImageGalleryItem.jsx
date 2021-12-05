import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, onMaximize }) {
  const { id, webformatURL, tags } = image;
  return (
    <li className={s.galleryItem}>
      <img
        className={s.image}
        id={id}
        src={webformatURL}
        alt={tags}
        onClick={onMaximize}
      />
    </li>
  );
}
