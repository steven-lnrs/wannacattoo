import { Link } from 'react-router-dom';

function CatCard({ cat }) {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} className="cat-image" />
      <h3>{cat.name}</h3>
      <p>Age: {cat.age} months old</p>
      <p>Color: {cat.color}</p>
      <p>Personality: {cat.personality}</p>
      <p>Vaccinated: {cat.vaccinated ? '✅' : '❌'}</p>

      <Link to={`/rent/${cat.id}`}>
        <button className="rent-btn">🐾 Rent This Cat</button>
      </Link>

      <Link to={`/keep/${cat.id}`}>
        <button className="keep-btn">❤️ Keep Forever</button>
      </Link>
    </div>
  );
}
export default CatCard