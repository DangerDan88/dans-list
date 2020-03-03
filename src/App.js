import React, { useState } from "react";

const App = () => {
  function useLocalState(localItem) {
    const [local, setLocal] = useState(localStorage.getItem(localItem));

    function setLocalItem(newItem) {
      localStorage.setItem(localStorage, newItem);
      setLocal(newItem);
    }
  }
  return (
    <div className="App">
      <h1>State persisting into Local storage</h1>
    </div>
  );
};

export default App;
