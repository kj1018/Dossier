import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Log from "./Log";
import CreateArea from "./CreateArea";

function App() {
  const [logs, setLogs] = useState([]);

  function addLog(newLog) {
    setLogs((prevLogs) => {
      return [...prevLogs, newLog];
    });
  }

  function deleteLog(id) {
    setLogs((prevLogs) => {
      return prevLogs.filter((logItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addLog} />
      {logs.map((logItem, index) => {
        return (
          <Log
            key={index}
            id={index}
            title={logItem.title}
            content={logItem.content}
            onDelete={deleteLog}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
