import React, { useState, useEffect } from "react";
import "./QuestionCard.css";
const QuestionCard = ({
  questionData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  const [timer, setTimer] = useState(30);
  const selectAnswer = (e) => {
    if (e.currentTarget.value === questionData[count]?.correct_answer) {
      setScore(score + 100);
    }
    setCount(count + 1);
    if (count === 9) {
      setModal(true);
    }
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count, setCount, setModal, timer]);

  return (
    <div className="questionCard">
      <div className="questionCard-timer">{timer}</div>
      <div className="questionCard-title">
        {count + 1}/10 - {questionData[count]?.question}
      </div>
      {questionData[count]?.answers?.map((answer, i) => (
        <button onClick={selectAnswer} key={i} value={answer}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
