import React, { useState } from "react";

const Rules = () => {
  const [showText, setShowText] = useState(false);

  let rulesSection = null;

  if (showText) {
    rulesSection = (
      <div className="mx-auto mt-5 text-center">
        <h1 className="text-2xl">How to play dice game</h1>
        <p>Add your rules here.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto border rounded p-1 w-60 h-10 text-center items-center mt-5 cursor-pointer">
        <button>Reset score</button>
      </div>
      <div className="mx-auto border rounded w-60 h-10 p-1 text-center mt-5 cursor-pointer">
        <button onClick={() => setShowText(!showText)}>Show rules</button>
      </div>
      {rulesSection}
    </div>
  );
};

export default Rules;
