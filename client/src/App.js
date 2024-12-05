import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <div>
        <Link to="/formA">Form A</Link>
        <Link to="/formB">Form B</Link>

        <Routes>
          <Route path="/formA" element={<Form formType="Form A" />} />
          <Route path="/formB" element={<Form formType="Form B" />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
