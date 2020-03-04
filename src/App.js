import React, { useState, useEffect } from "react";
let dailyTasks = [
  { name: "Code 1 hour everyday", done: false },
  { name: "100 percent on diet", done: false },
  { name: "listen to 3 syntax podcasts a week", done: false }
];

const App = () => {
  const [tasks, setTasks] = useState({});
  const [input, setInputValue] = useState("");
  return <div className="App"></div>;
};

export default App;
