import React from 'react';

const ActionButtons = ({ isFlipped, onFlip, onNext }) => {
  return (
    <div className="action-buttons">
      <button className="flip-btn" onClick={onFlip}>
        {isFlipped ? 'Show Question' : 'Show Answer'}
      </button>
      <button className="next-btn" onClick={onNext}>
        Next Card
      </button>
    </div>
  );
};

export default ActionButtons;