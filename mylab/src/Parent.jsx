import React, { useState } from "react";
import Question from './Questions';

const Parent = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      id: 2,
      question: "What is a component in React?",
      answer: "A component in React is a reusable piece of UI that can be a function or a class."
    },
    {
      id: 3,
      question: "What is state in React?",
      answer: "State is an object that holds data that can change over the lifetime of a component."
    }
  ]);
  const handleDelete = (qid) => {
    const updatedQuestions = questions.filter((q) => q.id !== qid);
    setQuestions(updatedQuestions); 
  };
  return (
    <>
      <Question questions={questions} onDelete={handleDelete}/>
    </>
  );
};

export default Parent;
