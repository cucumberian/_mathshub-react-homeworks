/* eslint-disable react/prop-types */
import React from "react";
import DrawContext from "../../context/draw-context";

import "./Drawing.css";
import { AiFillDelete } from "react-icons/ai";

function Drawing({ drawing }) {
  const drawContext = React.useContext(DrawContext);

  const deleteHandler = () => {
    drawContext.deleteDrawHandler(drawing.id);
  };

  return (
    <div className="drawing">
      <AiFillDelete onClick={deleteHandler} className="delete-button">
        X
      </AiFillDelete>
      <figure>
        <p>{drawing.data}</p>
        <figcaption>
          <h5 className="title">{drawing.title}</h5>
        </figcaption>
      </figure>
    </div>
  );
}

export default Drawing;
