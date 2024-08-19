import React from "react";

const Question = ({ questions, onDelete }) => {
  return (
    <div className="container mt-2 pb-3" style={{ backgroundColor: '#1877F2', width: "800px" }}>
      <h1 style={{ color: "white" }}>Frequently Asked Questions</h1>
      {questions.map(q => (
        <div
          key={q.id}
          className="position-relative mb-3 p-3"
          style={{ backgroundColor: 'white', fontSize: '20px', borderRadius: '5px' }}
        >
          <button
            className="btn btn-primary btn-sm position-absolute"
            style={{ top: '10px', right: '10px' }}
            onClick={() => onDelete(q.id)}
          >
            -
          </button>
          <h2>{q.question}</h2>
          <p>{q.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Question;
