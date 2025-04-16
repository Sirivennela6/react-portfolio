import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  color: #333;
`;

const MainContent = styled(motion.main)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
}

export default App; 