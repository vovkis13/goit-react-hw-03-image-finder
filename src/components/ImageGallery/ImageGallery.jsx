import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ collection }) {
  return (
    <ul className={s.imageGallery}>
      {collection.map(imageInfo => (
        <ImageGalleryItem key={imageInfo.id} image={imageInfo} />
      ))}
    </ul>
  );
}
