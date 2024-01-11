// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Files from './pages/Files';
import About from './pages/About';
import Doctors from './pages/Doctors';
// import Medicine from './pages/Medicine';
import Review from './pages/Review';
import Blogs from './pages/Blogs';
import Logout from './pages/Logout';

import Apps from './pages/Pharamacy/Apps';
import Medi from './medi';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/files" element={<Files />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/apps" element={<Medi />} />
          <Route path="/review" element={<Review />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
