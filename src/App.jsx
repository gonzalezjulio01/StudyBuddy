import React, { useState, useEffect } from 'react';
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';
import Quiz from './components/Quiz';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [isQuizMode, setIsQuizMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('flashcards');
    if (saved) setFlashcards(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const addFlashcard = (card) => {
    setFlashcards((prev) => [...prev, card]);
  };

  const deleteCard = (index) => {
    setFlashcards((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '2rem' }}>
      <h1>📚 StudyBuddy</h1>
      {!isQuizMode ? (
        <>
          <FlashcardForm addFlashcard={addFlashcard} />
          <FlashcardList flashcards={flashcards} deleteCard={deleteCard} />
          {flashcards.length > 0 && (
            <button onClick={() => setIsQuizMode(true)}>Start Quiz</button>
          )}
        </>
      ) : (
        <Quiz flashcards={flashcards} onExit={() => setIsQuizMode(false)} />
      )}
    </div>
  );
}

export default App;
