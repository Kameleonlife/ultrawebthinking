import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Ultrawebthinking 🚀");

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 className="title">{message}</motion.h1>
      <p>Ke klikuar <strong>{count}</strong> herë!</p>

      <input 
        type="text" 
        className="input"
        placeholder="Ndrysho mesazhin..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <motion.button 
        className="btn"
        whileHover={{ scale: 1.1, backgroundColor: "#ff4500" }}
        whileTap={{ scale: 0.9 }}
        onClick={increaseCount}
      >
        Kliko këtu
      </motion.button>
    </motion.div>
  );
}

export default App;
