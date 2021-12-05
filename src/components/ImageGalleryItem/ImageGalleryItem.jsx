import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem() {
  return (
    <li className={s.galleryItem}>
      <img className={s.image} src="" alt="" />
    </li>
  );
}
