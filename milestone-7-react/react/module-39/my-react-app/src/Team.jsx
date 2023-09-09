import { useState } from "react"

export default function Team(){

  const teamStyle = {
    border: '5px solid purple',
    padding: '10px',
    margin: '10px',
   borderRadius: '15px'
  }

  const [team,setTeam] = useState(11)

  const handleAdd = ()=>{

    const addPlayers = team+1;

    setTeam(addPlayers)

  }

  const handleReduce=()=>{
    const removePlayers = team-1;
    setTeam(removePlayers)
  }



  return(
    <div style={teamStyle}>
      <h3>Team Members: {team}</h3>
      <button onClick={handleAdd} >Add Players</button>
      <button onClick={handleReduce}>  Remove Players</button>
    </div>
  )
}