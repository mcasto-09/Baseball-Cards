import playerData from './PlayerData.js';
import { useState } from 'react';
import React from 'react';


function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true); // Correct usage of useState

  const toggleCard = () => {
    setShowPicture(!showPicture);
  };

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    );
  }

  const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
    <p key={statName}>
      {statName}: {statValue}
    </p>
  ));

  return (
    <div className="card" onClick={toggleCard}>
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
      {statsDisplay}
    </div>
  );
}

function App() {
  const cards = playerData.map((player) =>
    <BaseballCard
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgUrl={player.imgUrl}
      key={player.cardId}
    />
  );

  return <>{cards}</>;
}

export default App;