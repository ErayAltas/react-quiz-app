const shuffle = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (mode, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${mode}&type=multiple`;

  const data = await (await fetch(url)).json();

  return data.results.map((dt) => ({
    ...dt,
    answers: shuffle([...dt.incorrect_answers, dt.correct_answer]),
  }));
};
