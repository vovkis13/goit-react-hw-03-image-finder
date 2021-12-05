import React from 'react';
import s from './Modal.module.css';

export default function Modal() {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
}
