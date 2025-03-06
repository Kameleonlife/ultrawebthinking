import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="content-box">
                <h1>Ultrawebthinking</h1>
                <p className="message">Ke klikuar <b>{count}</b> herë!</p>
                <div className="button-container">
                    <button className="button click-button" onClick={handleClick}>
                        Kliko këtu
                    </button>
                    <button className="button mode-button" onClick={toggleDarkMode}>
                        {darkMode ? "Kalo në Light Mode 🌞" : "Kalo në Dark Mode 🌙"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
