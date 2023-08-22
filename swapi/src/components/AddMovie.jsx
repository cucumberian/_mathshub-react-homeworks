/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import "./AddMovie.css";

class AddMovie extends React.Component {
  titleRef = React.createRef("");

  openingTextRef = React.createRef("");

  releaseDateRef = React.createRef("");

  submitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    const movie = {
      title: this.titleRef.current.value,
      openingText: this.openingTextRef.current.value,
      releaseDate: this.releaseDateRef.current.value,
    };

    this.props.onAddMovie(movie);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <div className="control">
          <label htmlFor="title">Название фильма</label>
          <input type="text" id="title" ref={this.titleRef} />
        </div>
        <div className="control">
          <label htmlFor="opening-text">Вступительный текст</label>
          <textarea rows="5" id="opening-text" ref={this.openingTextRef} />
        </div>
        <div className="control">
          <label htmlFor="date">Дата выхода</label>
          <input type="text" id="date" ref={this.releaseDateRef} />
        </div>
        <button>Добавить фильм</button>
      </form>
    );
  }
}

export default AddMovie;
