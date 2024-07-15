import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import { Header, Footer } from './components';
// import Speakers from './pages/Speakers';
// import Talks from './pages/Talks';
// import Blogs from './pages/Blogs';
// import Sponsors from './pages/Sponsors';
// import FAQ from './pages/FAQ';
// import Team from './pages/Team';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
      <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="content">
        <Routes>
          <Route path="/" element={
          <>
            <Header />
            <Footer />
          </>
          } />
          {/* <Route path="/speakers" element={<Speakers />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;