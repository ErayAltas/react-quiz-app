import React, { useState } from "react";
import "./Introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const modes = ["easy", "medium", "hard"];
  const [changeMode, setChangeMode] = useState("easy");
  const TOTAL_QUESTIONS = 10;

  const navigate = useNavigate();

  const startQuiz = () => {
    if (changeMode) {
      navigate(`/quiz/${changeMode}/${TOTAL_QUESTIONS}`);
    }
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          height={100}
          src="https://www.brightful.me/content/images/2020/08/shutterstock_686118184.jpg"
          alt=""
        />
        <Dropdown modes={modes} setChangeMode={setChangeMode} />
        <div onClick={startQuiz} className="introduce-btn">
          Start quiz
        </div>
      </div>
    </div>
  );
};

export default Introduce;
