import React, { use, useEffect, useState } from "react";
import "./TenziesProject.css";
import Die from "./Die";
import confetti from 'canvas-confetti';


export default function TenziesProject() {

    const [dice, setDice] = useState(() => generateAllNewDice());
    const [clickCount, setclickCount] = useState(0);

    const gameWon = dice.every(die => die.isClicked) && 
                    dice.every(die => die.value === dice[0].value);

    useEffect(() => {
        if (gameWon) {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
                });
            }
        }, [gameWon]);

    function generateAllNewDice () {
        const newDice = [];
        let i = 0;

        while (i < 10) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isClicked: false, 
                id: i + 1
            });
            i ++;
        }
        return newDice;
    }

    function diceAction() {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die => 
                die.isClicked ? die : { ...die, value: Math.ceil(Math.random() * 6), isClicked: die.isClicked}
            ))

           setclickCount(prev => prev + 1);
        } else {
            setDice(generateAllNewDice());
            setclickCount(0);
        }
    }

    function diceClicked(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ? {...die, isClicked: !die.isClicked } : die
        ))
    }

    const diceNumbers = dice.map(dieObj => (
        <Die 
            key = {dieObj.id}
            value = {dieObj.value} 
            isClicked = {dieObj.isClicked}
            hold = {diceClicked}
            id = {dieObj.id}
        />
    ));

    return ( 
        <div className="project-container">
            <main>
                <h1 className="title">
                    {gameWon ? "Congratulations!!" : "Tenzies Twist"}
                </h1>
                <p className="directions"> {gameWon ? `Number of times you rolled: ${clickCount}`: `Roll them dice till you make it all nice! \n Click each dice to freeze and watch the numbers slice!`}</p>

                <div className="dice-container">
                    {diceNumbers}
                </div>

                <button className="roll-dice-btn" onClick={diceAction}>
                    {gameWon ? "Start Again" : "Roll Again"}
                </button>
            </main>
        </div>
    )
}
