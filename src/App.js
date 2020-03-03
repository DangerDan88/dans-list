import React, { useState } from "react";

const App = () => {
  function useLocalState(localItem) {
    const [local, setLocal] = useState(localStorage.getItem(localItem));

    function setLocalItem(newItem) {
      localStorage.setItem(localStorage, newItem);
      setLocal(newItem);
    }
    return [local, setLocal];
  }
  useLocalState();
  const [value, setValue] = useState("value");
  return (
    <div className="App">
      <h1>State persisting into Local storage</h1>
      <p>ToDo: {value}</p>
      <button onClick={() => setValue("code")}>Code</button>
    </div>
  );
};

export default App;
