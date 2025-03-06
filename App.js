import { SpeedInsights } from "@vercel/speed-insights/react";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Ultrawebthinking 🚀</h1>
        <p>Zgjidhje inteligjente për të ardhmen!</p>
      </header>

      <section className="content">
        <h2>Pse Ultrawebthinking?</h2>
        <p>Ne ndihmojmë zhvilluesit dhe bizneset të rrisin produktivitetin me teknologjinë më të fundit.</p>
        <button className="cta-button">Mëso më shumë</button>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Ultrawebthinking. Të gjitha të drejtat e rezervuara.</p>
      </footer>
    </div>
  );
}

export default App;
