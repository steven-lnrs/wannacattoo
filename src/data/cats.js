// src/data/cats.js
import cat1 from '../assets/Fluffy.jpg';
import cat2 from '../assets/Snowball.jpg';
import cat3 from '../assets/Mittens.jpg';

const cats = [
  {
    id: 1,
    name: "Whiskers",
    age: 2 ,
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
  },
  {
    id: 4,
    name: "Cleo",
    age: 14,
    color: "White",
    personality: "Lurks in windows, secretly sweet",
    vaccinated: true,
    image: "https://preview.redd.it/my-6-month-old-baby-girl-alaska-show-me-your-white-kitty-v0-vkhims5vjwgc1.jpeg?width=1080&crop=smart&auto=webp&s=49f7cd50a11e3c042c857a59e7b27797573c8dfd"
  }
,
  {
    id: 5,
    name: "Luna",
    age: 1,
    color: "Black",
    personality: "Playful",
    vaccinated: true,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Oliver",
    age: 4,
    color: "Orange",
    personality: "Chill",
    vaccinated: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVqX8v3mKvMccWC5kCLYfhMOSHgeddg5cAg&s"
  }
];

export default cats;
