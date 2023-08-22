/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';

import './AddMovie.css';

function AddMovie({ onAddMovie }) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control'>
        <label htmlFor='title'>Название фильма</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className='control'>
        <label htmlFor='opening-text'>Вступительный текст</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef} />
      </div>
      <div className='control'>
        <label htmlFor='date'>Дата выхода</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
