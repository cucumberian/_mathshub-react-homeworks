import React from "react";

import "./ButtonSet.css";

function ButtonSet(props) {
  return <div className="button-set">{props.children}</div>;
}

export default ButtonSet;
