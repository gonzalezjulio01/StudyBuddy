import React, { useState } from 'react';

function FlashcardList({ flashcards, deleteCard }) {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div>
      <h2>Your Flashcards</h2>
      {flashcards.length === 0 && <p>No flashcards yet.</p>}
      {flashcards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleFlip(index)}
          style={{
            border: '1px solid gray',
            padding: '1rem',
            marginBottom: '1rem',
            cursor: 'pointer',
            background: '#f9f9f9',
          }}
        >
          <strong>
            {flippedIndex === index ? card.answer : card.question}
          </strong>
          <br />
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteCard(index);
            }}
          >
            🗑️ Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default FlashcardList;
