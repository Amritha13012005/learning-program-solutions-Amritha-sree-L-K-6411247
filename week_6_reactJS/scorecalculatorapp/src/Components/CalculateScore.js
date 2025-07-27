import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "John";
  const school = "ABC High School";
  const total = 450;
  const goal = 500;
  const average = (total / goal) * 100;

  return (
    <div className="score-box">
      <h2>{name} from {school}</h2>
      <p>Total Marks: {total}</p>
      <p>Goal: {goal}</p>
      <p>Average Score: {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
