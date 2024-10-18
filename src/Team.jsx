import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    const addPlayer = () => {
        const hold = team + 1;
        setTeam(hold);
    }
    const removePlayer = () => {
        setTeam(team - 1);
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}