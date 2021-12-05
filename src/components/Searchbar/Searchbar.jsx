import React from 'react';
import { Component } from 'react';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>
          <input
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
