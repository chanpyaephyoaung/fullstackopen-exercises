import { useState, useEffect } from "react";

const Button = ({ label, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};

const generateRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const findIndexOfMaxValue = arr => {
  return arr.reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0);
};

const findMaxValue = arr => {
  return Math.max(...arr);
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const initialPointsArr = new Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(initialPointsArr);
  const [mostVotedAnec, setMostVotedAnec] = useState("");

  useEffect(() => {
    const indexOfMaxPoint = findIndexOfMaxValue(points);
    const maxPoint = findMaxValue(points);
    const latestMostVotedAnec =
      points[selected] === maxPoint ? anecdotes[selected] : anecdotes[indexOfMaxPoint];
    console.log(points, latestMostVotedAnec);
    if (points[selected] !== maxPoint) return;
    setMostVotedAnec(latestMostVotedAnec);
  }, [points]); //eslint-disable-line react-hooks/exhaustive-deps

  const generateRandomAnecdote = () => {
    const randIndex = generateRandomNum(0, anecdotes.length);
    // change anecdote
    setSelected(randIndex);
  };

  const updatePoints = () => {
    // change points
    setPoints(prevPoints => prevPoints.map((p, i) => (i === selected ? p + 1 : p)));
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button type="button" label="vote" onClick={updatePoints} />
      <Button type="button" label="next anecdote" onClick={generateRandomAnecdote} />

      <h2>Anecdote with most votes</h2>
      <div>{mostVotedAnec}</div>
    </>
  );
};

export default App;
