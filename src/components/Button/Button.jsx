import React from 'react';
import s from './Button.module.css';


export default function Button({ handleClick }) {
  return (
    <button className={s.button} type="button" onClick={handleClick}>
      Load more
    </button>
  );
}
