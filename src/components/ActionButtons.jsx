import React from 'react';

const ActionButtons = ({ isFlipped, onFlip, onNext, onPrevious, disableNext, disablePrevious }) => {
  return (
    <div className="action-buttons">
      <button 
        className="prev-btn" 
        onClick={onPrevious} 
        disabled={disablePrevious}
        style={{ opacity: disablePrevious ? 0.5 : 1 }}
      >
        Previous
      </button>

      <button className="flip-btn" onClick={onFlip}>
        {isFlipped ? 'Show Question' : 'Show Answer'}
      </button>

      <button 
        className="next-btn" 
        onClick={onNext}
        disabled={disableNext}
        style={{ opacity: disableNext ? 0.5 : 1 }}
      >
        Next
      </button>
    </div>
  );
};

export default ActionButtons;
