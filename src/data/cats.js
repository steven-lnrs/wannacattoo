// src/data/cats.js
import cat1 from '../assets/Fluffy.jpg';
import cat2 from '../assets/Snowball.jpg';
import cat3 from '../assets/Mittens.jpg';

const cats = [
  {
    id: 1,
    name: "Whiskers",
    age: 2,
    color: "White",
    personality: "Curious",
    vaccinated: true,
    image: cat1
  },
  {
    id: 2,
    name: "Snowball",
    age: 5,
    color: "Tabby",
    personality: "Lazy",
    vaccinated: false,
    image: cat2
  },
  {
    id: 3,
    name: "Mittens",
    age: 3,
    color: "Black",
    personality: "Playful",
    vaccinated: true,
    image: cat3
  }
];

export default cats;
