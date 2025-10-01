import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import ProgressSection from './components/ProgressSection';
import ActionButtons from './components/ActionButtons';
import flashcardData from './data/flashcards.json';

const App = () => {
  const [flashcards] = useState(flashcardData.flashcards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [seenCards, setSeenCards] = useState(new Set());
  const [sessionOrder, setSessionOrder] = useState([]);

  useEffect(() => {
    const initialOrder = [...Array(flashcards.length).keys()];
    setSessionOrder(initialOrder);
    setSeenCards(new Set([0]));
  }, [flashcards.length]);

  const getRandomCard = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * flashcards.length);
    } while (randomIndex === currentCardIndex && flashcards.length > 1);
    
    setCurrentCardIndex(randomIndex);
    setIsFlipped(false);
    
    setSeenCards(prev => new Set([...prev, randomIndex]));
    
    if (!sessionOrder.includes(randomIndex)) {
      setSessionOrder(prev => [...prev, randomIndex]);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const currentCard = flashcards[currentCardIndex];
  const currentSessionPosition = sessionOrder.indexOf(currentCardIndex) + 1;
  const totalSessionCards = sessionOrder.length;

  return (
    <div className="App">
      <Header flashcards={flashcards} seenCards={seenCards} />
      
      <div className="main-content">
        <Flashcard 
          card={currentCard}
          isFlipped={isFlipped}
          currentPosition={currentSessionPosition}
          totalSeen={totalSessionCards}
          totalCards={flashcards.length}
          onFlip={flipCard}
        />

        <ActionButtons 
          isFlipped={isFlipped}
          onFlip={flipCard}
          onNext={getRandomCard}
        />
      </div>

      <ProgressSection 
        flashcards={flashcards} 
        seenCards={seenCards}
        currentSessionPosition={currentSessionPosition}
        totalSessionCards={totalSessionCards}
      />
    </div>
  );
}

export default App;