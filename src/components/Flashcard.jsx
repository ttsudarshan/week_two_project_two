import React from 'react';

const Flashcard = ({ card, isFlipped, currentPosition, totalSeen, totalCards, onFlip }) => {
  return (
    <>
      <div className="current-card-info">
        <span className="card-counter">
          {currentPosition} / {totalSeen}
        </span>
        <div className="card-tags">
          <span className={`difficulty-tag ${card.difficulty}`}>
            {card.difficulty}
          </span>
          <span className="category-tag">
            {card.category}
          </span>
        </div>
      </div>

      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={onFlip}
      >
        <div className="flashcard-inner">
          <FlashcardFront card={card} />
          <FlashcardBack card={card} />
        </div>
      </div>
    </>
  );
};

const FlashcardFront = ({ card }) => (
  <div className="flashcard-front">
    <div className="card-content">
      <div className="card-label">Question</div>
      <p className="card-text">{card.question}</p>
    </div>
    <div className="card-footer">
      <small>Click to reveal answer</small>
    </div>
  </div>
);

const FlashcardBack = ({ card }) => (
  <div className="flashcard-back">
    <div className="card-content">
      <div className="card-label">Answer</div>
      <p className="card-text">{card.answer}</p>
    </div>
    <div className="card-footer">
      <small>Click to see question</small>
    </div>
  </div>
);
{feedback && (
  <div className={`card-feedback ${feedback}`}>
    {feedback === 'correct' ? '✅ Correct!' : '❌ Incorrect'}
  </div>
)}

export default Flashcard;