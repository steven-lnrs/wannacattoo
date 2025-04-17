import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Store from './pages/Store';
import RentPage from './pages/RentPage';
import KeepPage from './pages/KeepPage';
import Header from './components/Header';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />     {/* 👈 Landing Page */}
          <Route path="/store" element={<Store />} />  {/* 👈 Cat Store */}
          <Route path="/rent/:catId" element={<RentPage />} />
          <Route path="/keep/:catId" element={<KeepPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
