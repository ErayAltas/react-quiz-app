import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";

function Quiz() {
  const { mode, amount } = useParams();
  const [questionData, setQuestionData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(mode, amount);
      setQuestionData(data);
    };
    getData();
  }, [amount, mode]);

  console.log("questionData", questionData);

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionCard
          questionData={questionData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
}

export default Quiz;
