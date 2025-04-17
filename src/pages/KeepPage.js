import React from 'react';
import { useParams } from 'react-router-dom';
import catData from '../data/cats';

function RentPage() {
  const { catId } = useParams();
  const cat = catData.find(c => c.id === parseInt(catId));

  return (
    <div style={{ padding: '2rem' }}>
      <h2>You're keeping {cat.name}!</h2>
      <img src={cat.image} alt={cat.name} style={{ width: '200px' }} />
      <p>Age: {cat.age}</p>
      <p>Color: {cat.color}</p>
      <p>Personality: {cat.personality}</p>
      <p>Vaccinated: {cat.vaccinated ? '✅ Yes' : '❌ No'}</p>
      <p>Thanks for choosing WannaCatToo!</p>
    </div>
  );
}

export default RentPage;
