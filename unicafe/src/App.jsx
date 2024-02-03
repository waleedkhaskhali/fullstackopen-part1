import { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const StatisticsLine = ({ statistic, text }) => {
  return (
    <>
      <tr>
        <td>
          <p>{text}</p>
        </td>
        <td>{statistic}</td>
      </tr>
    </>
  );
};

const Statistics = ({ clicks, positive }) => {
  return (
    <>
      <StatisticsLine statistic={clicks.good} text="good" />
      <StatisticsLine statistic={clicks.neutral} text="neutral" />
      <StatisticsLine statistic={clicks.bad} text="bad" />
      <StatisticsLine statistic={clicks.total} text="total" />
      <StatisticsLine statistic={positive} text="positive" />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });
  let positive = clicks.good / clicks.total;

  const handleGoodClick = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1,
      total: (clicks.total += 1),
    });
  };

  const handleNeutralClick = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
      total: (clicks.total += 1),
    });
  };

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1, total: (clicks.total += 1) });
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      {clicks.total === 0 ? (
        <div>
          <p>No feedback given</p>
        </div>
      ) : (
        <Statistics clicks={clicks} positive={positive} />
      )}
    </div>
  );
};

export default App;
