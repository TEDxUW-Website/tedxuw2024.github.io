import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
// import Speakers from './pages/Speakers';
// import Talks from './pages/Talks';
// import Blogs from './pages/Blogs';
// import Sponsors from './pages/Sponsors';
// import FAQ from './pages/FAQ';
// import Team from './pages/Team';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <NavBar isOpen={isOpen} toggleMenu={toggleMenu}/>
      <SideBar isOpen={isOpen} toggleMenu={toggleMenu}/>
      <div style={{width: "100%", height: "200vh", backgroundColor: "black"}}></div>
      {/* <Routes>
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/team" element={<Team />} />
      </Routes> */}
    </Router>
  );
}

export default App;