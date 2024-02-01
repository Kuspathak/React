import React, { useState } from "react";
import DiceRoller from "./DiceRoller";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

const GamePlay = () => {
  const [resetscore,setresetscore]=useState()
  const [score,setscore]=useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  

  return (
    <>
    <div className="flex">
      <TotalScore />
      <NumberSelector
      setSelectedNumber={setSelectedNumber}
      selectedNumber={selectedNumber}
      />
    </div>
    <DiceRoller
    currentDice={currentDice}
    setCurrentDice={setCurrentDice}/>
    <Rules
    resetscore={resetscore}
    setresetscore={setresetscore}/>
    </>
  );
};

export default GamePlay;
