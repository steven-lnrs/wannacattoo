import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Store from './pages/Store';
import RentPage from './pages/RentPage';
import KeepPage from './pages/KeepPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';
import './styles/theme.css'; // Adjust if your path differs


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/store" element={<Store />} />
            <Route path="/rent/:catId" element={<RentPage />} />
            <Route path="/keep/:catId" element={<KeepPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;