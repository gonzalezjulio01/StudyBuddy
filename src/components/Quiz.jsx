import React, { useState } from 'react';

function Quiz({ flashcards, onExit }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setIndex((prev) => prev + 1);
  };

  const handleCorrect = () => {
    setScore((prev) => prev + 1);
    handleNext();
  };

  if (index >= flashcards.length) {
    return (
      <div>
        <h2>Quiz Complete!</h2>
        <p>
          Your Score: {score} / {flashcards.length}
        </p>
        <button onClick={onExit}>Exit Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Quiz Mode</h2>
      <p>
        Card {index + 1} of {flashcards.length}
      </p>
      <div
        style={{
          border: '1px solid gray',
          padding: '1rem',
          background: '#fffbe6',
          cursor: 'pointer',
        }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? flashcards[index].answer : flashcards[index].question}
      </div>
      <br />
      {showAnswer && (
        <div>
          <button onClick={handleCorrect}>✔️ I got it</button>
          <button onClick={handleNext}>❌ Skip</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
