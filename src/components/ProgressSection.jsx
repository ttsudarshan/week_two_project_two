import React from 'react';

const ProgressSection = ({ flashcards, seenCards, currentSessionPosition, totalSessionCards }) => {
  const totalCards = flashcards.length;
  const seenCount = seenCards.size;

  const easyCards = flashcards.filter(card => card.difficulty === 'easy');
  const mediumCards = flashcards.filter(card => card.difficulty === 'medium');
  const hardCards = flashcards.filter(card => card.difficulty === 'hard');

  const easySeen = easyCards.filter((card, index) => {
    const globalIndex = flashcards.indexOf(card);
    return seenCards.has(globalIndex);
  }).length;

  const mediumSeen = mediumCards.filter((card, index) => {
    const globalIndex = flashcards.indexOf(card);
    return seenCards.has(globalIndex);
  }).length;

  const hardSeen = hardCards.filter((card, index) => {
    const globalIndex = flashcards.indexOf(card);
    return seenCards.has(globalIndex);
  }).length;

  return (
    <div className="progress-section">
      <h3>Session Progress</h3>
      <div className="session-info">
        <div className="session-counter">
          Card {currentSessionPosition} of {totalSessionCards} in this session
        </div>
        <div className="overall-progress">
          {seenCount} of {totalCards} total cards reviewed
        </div>
      </div>
      
      <div className="progress-bars">
        <ProgressBar 
          label="Easy" 
          current={easySeen} 
          total={easyCards.length} 
          type="easy" 
        />
        <ProgressBar 
          label="Medium" 
          current={mediumSeen} 
          total={mediumCards.length} 
          type="medium" 
        />
        <ProgressBar 
          label="Hard" 
          current={hardSeen} 
          total={hardCards.length} 
          type="hard" 
        />
      </div>
    </div>
  );
};

const ProgressBar = ({ label, current, total, type }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="progress-item">
      <div className="progress-label">
        <span>{label}</span>
        <span className="progress-count">{current}/{total}</span>
      </div>
      <div className="progress-bar">
        <div 
          className={`progress-fill ${type}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="progress-percentage">
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressSection;