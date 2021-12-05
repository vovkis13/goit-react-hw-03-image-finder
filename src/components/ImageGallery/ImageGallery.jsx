import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ collection, onMaximize }) {
  return (
    <ul className={s.imageGallery}>
      {collection.map(imageInfo => (
        <ImageGalleryItem
          key={imageInfo.id}
          image={imageInfo}
          onMaximize={onMaximize}
        />
      ))}
    </ul>
  );
}
