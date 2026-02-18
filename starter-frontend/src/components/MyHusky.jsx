import { useState } from "react";

const MyHusky = () => {
  const [mood, setMood] = useState(100);
  const [hunger, setHunger] = useState(100);
  const [energy, setEnergy] = useState(100);
  return (
    <div>
      <p>Mood: {mood}</p>
      <p>Hunger: {hunger}</p>
      <p>Energy: {energy}</p>
    </div>
  );
};

export default MyHusky;
