import React from "react";

function IndianPlayers() {
  // Destructuring
  const oddPlayers = ["Virat", "Shubman", "KL Rahul", "Jadeja", "Shami"];
  const evenPlayers = ["Rohit", "Suryakumar", "Hardik", "Ashwin", "Bumrah", "Siraj"];

  const [p1, p2, p3, p4, p5] = oddPlayers;
  const [e1, e2, e3, e4, e5, e6] = evenPlayers;

  // Merge arrays
  const T20players = ["Virat", "Rohit", "Bumrah"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Odd Team Players</h2>
      {oddPlayers.map((p, i) => <p key={i}>{p}</p>)}

      <h2>Even Team Players</h2>
      {evenPlayers.map((p, i) => <p key={i}>{p}</p>)}

      <h2>Merged Players</h2>
      {mergedPlayers.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

export default IndianPlayers;
