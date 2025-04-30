// 📍 src/pages/Welcome.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLoader from '../components/PageLoader';
import '../styles/theme.css';

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleViewCats = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/store');
    }, 1000);
  };

  return loading ? (
    <PageLoader />
  ) : (
    <main className="welcome-container">
      <div className="welcome-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="welcome-title">Welcome to WannaCatToo 🐾</h1>
          <p className="welcome-tagline">
            Where every purr tells a story. Rent a cat. Keep a cat. Love a cat.
          </p>
          <button className="view-cats-button" onClick={handleViewCats}>🐱 View Cats</button>
          <div className="welcome-image">
            <img
              src="https://media.istockphoto.com/id/484991904/photo/man-holds-rescued-stray-kitten.jpg?s=612x612&w=0&k=20&c=geK0gYtezne1VK80gFXPKbn0hHgQOq-zaUwkwxUvSfA="
              alt="Illustrated cat"
            />
          </div>
        </section>

        {/* How It Works */}
        <section className="info-section">
          <h2 className="section-title">How It Works</h2>
          <ol className="section-list">
            <li>Browse our collection and choose your purr-fect match</li>
            <li>Select rental length & delivery option</li>
            <li>Receive your furry therapist — and let the cuddles begin!</li>
          </ol>
        </section>

        {/* About Section */}
        <section className="info-section">
          <h2 className="section-title">About Us</h2>
          <p>
            Born from a late-night group chat and too many cat memes, WannaCatToo started with a simple idea: why should only full-time pet owners get all the snuggles? We’re a team of designers, cat whisperers, and soft blanket connoisseurs committed to matching humans with their ideal feline — for a day, a month, or a lifetime.
          </p>

          <h2 className="section-title">Our Mission</h2>
          <p>
            We believe cats are little furry therapists. Our mission is to make their magic accessible to everyone — even folks in pet-restricted apartments or those just testing the waters of pet parenting. Every rental or adoption supports rescue efforts and helps cats find homes where they’re loved, spoiled, and appreciated.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="info-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <ul className="section-list">
            <li>✨ Every cat is health-checked, cuddle-rated, and Instagram-ready</li>
            <li>🚚 Flexible delivery options — doorstep drop-offs or meetups at our Cat Lounges</li>
            <li>💖 Rentals help support local foster homes and feline mental wellness programs</li>
            <li>🧼 We provide starter kits so you're never caught without a litter box</li>
            <li>😻 Featured Cats of the Week and surprise treats for loyal renters</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
