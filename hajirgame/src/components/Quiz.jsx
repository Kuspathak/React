import React, { useState } from 'react';
import { QuizData } from '../Data/QuizData';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [choosedAnswer, setChoosedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleScore = (answer) => {
        setChoosedAnswer(answer);

        if (answer === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setChoosedAnswer(null); // Reset the chosen answer for the next question
        } else {
            setIsQuizFinished(true);
        }
    };

    const handlePlayAgain = () => {
        setCurrentQuestion(0);
        setChoosedAnswer(null);
        setScore(0);
        setIsQuizFinished(false);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl text-center mb-4">Quiz App</h1>
            <div className="w-full max-w-md shadow-lg border rounded overflow-hidden">
                {isQuizFinished ? (
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="font-bold text-center mb-2">Quiz Finished</h2>
                        <p className='font-bold text-3xl'>Your Score: {score}</p>
                        <button className='bg-black p-1 text-white rounded mb-2 mt-3'
                         onClick={handlePlayAgain}>Play Again</button>
                    </div>
                ) : (
                    <div>
                        <div className="p-4">
                            <h2 className="font-bold text-center mb-2">Question {currentQuestion + 1}</h2>
                            <p className="font-semibold">{QuizData[currentQuestion].question}</p>
                        </div>
                        <div className="flex flex-col p-4">
                            <h3 className="font-bold text-center mb-2">Options</h3>
                            {QuizData[currentQuestion].options.map((option, i) => (
                                <button
                                    onClick={() => handleScore(option)}
                                    key={i}
                                    className={`shadow-md p-4 border rounded mb-2 ${
                                        choosedAnswer === option ? 'bg-black text-white' : 'hover:bg-black hover:text-white border-black'
                                    }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className="p-4 text-center">
                            <input
                                type="button"
                                value="Next"
                                className="bg-black rounded text-white font-bold py-2 px-4 hover:bg-white hover:text-black hover:border border-black cursor-pointer"
                                onClick={handleNextQuestion}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
