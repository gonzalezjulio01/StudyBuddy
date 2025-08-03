import React, { useState } from 'react';

function FlashcardForm({ addFlashcard }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) {
      setError('Both fields are required');
      return;
    }
    addFlashcard({ question, answer });
    setQuestion('');
    setAnswer('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add a Flashcard</h2>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <br />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Add Card</button>
    </form>
  );
}

export default FlashcardForm;
