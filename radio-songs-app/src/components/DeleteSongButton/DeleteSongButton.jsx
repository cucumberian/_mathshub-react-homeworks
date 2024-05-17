import React from "react";
import "./DeleteSongButton.css";

function DeleteSongButton({ isDisabled, onClick }) {
  const buttonPressedHandler = () => {
    onClick();
  };

  return (
    <button
      disabled={isDisabled}
      className="delete-song-button"
      onClick={buttonPressedHandler}
    >
      Удалить последний элемент
    </button>
  );
}

export default DeleteSongButton;
