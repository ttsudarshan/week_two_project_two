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
  const [seenCards, setSeenCards] = useState(new Set([0]));
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState(null); // "correct" or "incorrect"

  // handle flipping
  const flipCard = () => {
    setIsFlipped(!isFlipped);
    setFeedback(null); // clear feedback when flipping
  };

  // handle guess submission
  const handleSubmitGuess = () => {
    const currentAnswer = flashcards[currentCardIndex].answer.trim().toLowerCase();
    const guess = userGuess.trim().toLowerCase();

    if (guess === currentAnswer) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  // sequential navigation
  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
      setFeedback(null);
      setUserGuess('');
      setSeenCards(prev => new Set([...prev, currentCardIndex + 1]));
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsFlipped(false);
      setFeedback(null);
      setUserGuess('');
    }
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="App">
      <Header flashcards={flashcards} seenCards={seenCards} />
      
      <div className="main-content">
        <Flashcard 
          card={currentCard}
          isFlipped={isFlipped}
          feedback={feedback}
          onFlip={flipCard}
        />

        {/* Input box and feedback */}
        <div className="guess-section">
          <input
            type="text"
            placeholder="Enter your answer..."
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            className="guess-input"
          />
          <button onClick={handleSubmitGuess} className="submit-btn">Submit</button>

          {feedback && (
            <p className={`feedback ${feedback}`}>
              {feedback === 'correct' ? '✅ Correct!' : '❌ Incorrect'}
            </p>
          )}
        </div>

        <ActionButtons 
          isFlipped={isFlipped}
          onFlip={flipCard}
          onNext={handleNext}
          onPrevious={handlePrevious}
          disableNext={currentCardIndex === flashcards.length - 1}
          disablePrevious={currentCardIndex === 0}
        />
      </div>

      <ProgressSection 
        flashcards={flashcards} 
        seenCards={seenCards}
        currentSessionPosition={currentCardIndex + 1}
        totalSessionCards={flashcards.length}
      />
    </div>
  );
};

export default App;
