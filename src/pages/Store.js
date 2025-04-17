import React, { useState } from 'react';
import CatCard from '../components/CatCard.js';
import catData from '../data/cats.js'; // Make sure this is .js not .json
import Filters from '../components/Filters.js';

function Store() {
  const [cats, setCats] = useState(catData);
  const [rentedCats, setRentedCats] = useState([]);
  const [keptCats, setKeptCats] = useState([]);
  const [sort, setSort] = useState('age');


let visibleCats = [...catData];

// 🟡 Filter FIRST if sort is 'vaccinated'
if (sort === 'vaccinated') {
  visibleCats = visibleCats.filter(cat => cat.vaccinated);
} else {
  // 🔵 Then sort by age or name
  visibleCats.sort((a, b) => {
    if (sort === 'age') return a.age - b.age;
    if (sort === 'name') return a.name.localeCompare(b.name);
    return 0;
  });
}


  const handleRent = (id) => {
    if (!rentedCats.includes(id)) {
      setRentedCats([...rentedCats, id]);
    }
  };

  const handleKeep = (id) => {
    if (!keptCats.includes(id)) {
      setKeptCats([...keptCats, id]);
    }
  };

  const sortedCats = [...cats].sort((a, b) =>
    sort === 'age' ? a.age - b.age : a.name.localeCompare(b.name)
  );

  return (
    <div className="home-container">
      <Filters sort={sort} setSort={setSort} />
      <div className="cat-grid">
        {visibleCats.map((cat) => (
          <CatCard
            key={cat.id}
            cat={cat}
            isRented={rentedCats.includes(cat.id)}
            isKept={keptCats.includes(cat.id)}
            onRent={handleRent}
            onKeep={handleKeep}
          />
        ))}
      </div>
    </div>
  );
}

export default Store;
