import React from 'react';
import s from './Button.module.css';

export default function Button() {
  return (
    <button className={s.button} type="button">
      Load more
    </button>
  );
}
