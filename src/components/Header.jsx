import React from 'react';

const Header = ({ flashcards, seenCards }) => {
  const totalCards = flashcards.length;
  const seenCount = seenCards.size;
  const progressPercentage = Math.round((seenCount / totalCards) * 100);

  const easySeen = flashcards.filter((card, index) => 
    seenCards.has(index) && card.difficulty === 'easy'
  ).length;
  
  const mediumSeen = flashcards.filter((card, index) => 
    seenCards.has(index) && card.difficulty === 'medium'
  ).length;
  
  const hardSeen = flashcards.filter((card, index) => 
    seenCards.has(index) && card.difficulty === 'hard'
  ).length;

  const totalEasy = flashcards.filter(card => card.difficulty === 'easy').length;
  const totalMedium = flashcards.filter(card => card.difficulty === 'medium').length;
  const totalHard = flashcards.filter(card => card.difficulty === 'hard').length;

  return (
    <div className="header">
      <h1>Ultimate CS FlashCards</h1>
      <p>{seenCount} of {totalCards} cards reviewed ({progressPercentage}%)</p>
      
      <div className="stats-container">
        <div className="stat">
          <span className="stat-number">{seenCount}/{totalCards}</span>
          <span className="stat-label">Reviewed</span>
        </div>
        <div className="stat">
          <span className="stat-number">{easySeen}/{totalEasy}</span>
          <span className="stat-label">Easy</span>
        </div>
        <div className="stat">
          <span className="stat-number">{mediumSeen}/{totalMedium}</span>
          <span className="stat-label">Medium</span>
        </div>
        <div className="stat">
          <span className="stat-number">{hardSeen}/{totalHard}</span>
          <span className="stat-label">Hard</span>
        </div>
      </div>
    </div>
  );
};

export default Header;