import React from "react";

const DiceRoller = ({ currentDice, setCurrentDice }) => {
  const min = 1;
  const max = 6; // Change to 6 for a standard six-sided die

  const randomNumber = () => {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setCurrentDice((prev)=>randNum);
  };

  return (
    <div className="bg-red-500 items-center h-1/2 text-center font-bold">
      <div className="bg-yellow-400 w-64 mx-auto cursor-pointer" onClick={randomNumber}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice" className="mx-auto" />
        <h1 className="mt-6">Click on Dice to roll</h1>
        <p>You Got: {currentDice}</p>
      </div>
    </div>
    
  );
};

export default DiceRoller;
