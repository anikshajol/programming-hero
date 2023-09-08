import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const teamStyle = {
    border: "2px solid purple",
    padding: "10px",
  };

  function handleAdd() {
    const newPlayers = team + 1;
    setTeam(newPlayers);
  }

  return (
    <div style={teamStyle}>
      <h3>Player: {team} </h3>
      <button onClick={handleAdd}>Add players</button>
      <button
        onClick={() => {
          setTeam(team - 1);
        }}
      >
        Remove players
      </button>
    </div>
  );
}
