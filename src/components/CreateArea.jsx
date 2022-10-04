import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [log, setLog] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setLog((prevLog) => {
      return {
        ...prevLog,
        [name]: value,
      };
    });
  }

  function submitLog(event) {
    props.onAdd(log);
    setLog({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-log">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={log.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={log.content}
          placeholder="Take a log..."
          rows={isExpanded ? 3 : 1}
        />
        <button onClick={submitLog}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
