import aliens from './data/aliens';
import AlienCard from './components/Aliencard';
import AlienInfo from './components/Alieninfo';
import Navbuttons from './components/Navbuttons';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleNext = () => {
    setClicked(false);
    setIndex((prev) => (prev === aliens.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setClicked(false);
    setIndex((prev) => (prev === 0 ? aliens.length - 1 : prev - 1));
  };

  useEffect(() => {
    document.body.style.backgroundColor = aliens[index].backgroundColor;
    document.body.style.transition = "background-color 0.6s ease";
  }, [index]);

  return (
    <div className="app">
      <Navbuttons onPrev={handlePrev} onNext={handleNext} />
      <AlienCard
        alien={aliens[index]}
        clicked={clicked}
        onCardClick={() => setClicked(true)}
      />
      <AnimatePresence mode="wait">
        {clicked && <AlienInfo key={aliens[index].id} alien={aliens[index]} />}
      </AnimatePresence>
    </div>
  );
}

export default App;