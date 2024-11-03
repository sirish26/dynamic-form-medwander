import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="button-container">
          <Link to="/formA" className="form-button">Form A</Link>
          <Link to="/formB" className="form-button">Form B</Link>
        </div>

        <Routes>
          <Route path="/formA" element={<Form formType="Form A" />} />
          <Route path="/formB" element={<Form formType="Form B" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
