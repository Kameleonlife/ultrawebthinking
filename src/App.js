import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1>Ultrawebthinking 🚀</h1>
      <p>Ke klikuar {count} herë!</p>
      <button onClick={increaseCount}>Kliko këtu</button>
    </div>
  );
}

export default App;




