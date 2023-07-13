import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hasFeedback = good || neutral || bad;

  return (
    <>
      <h2>give feedback</h2>
      <div className="cta__wrapper">
        <Button type="button" onClick={() => setGood(prevCount => prevCount + 1)} label="good" />
        <Button
          type="button"
          onClick={() => setNeutral(prevCount => prevCount + 1)}
          label="neutral"
        />
        <Button type="button" onClick={() => setBad(prevCount => prevCount + 1)} label="bad" />
      </div>

      <h2>statistics</h2>
      {hasFeedback ? (
        <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
