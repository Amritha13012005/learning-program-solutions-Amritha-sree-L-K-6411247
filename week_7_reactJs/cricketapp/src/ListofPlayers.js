import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Shubman Gill", score: 60 },
    { name: "Suryakumar Yadav", score: 75 },
    { name: "KL Rahul", score: 50 },
    { name: "Hardik Pandya", score: 72 },
    { name: "Ravindra Jadeja", score: 66 },
    { name: "R Ashwin", score: 40 },
    { name: "Mohammed Shami", score: 30 },
    { name: "Jasprit Bumrah", score: 45 },
    { name: "Mohammed Siraj", score: 55 }
  ];

  // Filter using Arrow Function
  const below70 = players.filter(player => player.score < 70);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>All Players</h2>
      {players.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}

      <h2>Players with score below 70</h2>
      {below70.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
}

export default ListofPlayers;
