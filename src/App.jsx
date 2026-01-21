import { useState } from 'react'
import './App.css';
import HomePage from '../src/pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ZnamenkaPage from './pages/ZnamenkaPage/ZnamenkaPage';
// библиотека для сео   npm install @dr.pogodin/react-helmet
import { HelmetProvider } from "@dr.pogodin/react-helmet";



function App() {


  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/znamenka" element={<ZnamenkaPage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
