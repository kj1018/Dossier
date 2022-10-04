import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";

function Log(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="log">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>X</button>
    </div>
  );
}

export default Log;
