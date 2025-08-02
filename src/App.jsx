import Die from './components/Die.jsx';
import { useState, useRef, useEffect} from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

export default function App() {
  function generateRandomDie(id) {
    return {
      id,
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    };
  }

  function allNewDice() {
    return Array.from({ length: 10 }, (_, i) => generateRandomDie(i + 1));
  }

  const [isRolling, setIsRolling] = useState(false);
  const [dice, setDice] = useState(allNewDice());
  const [gameWon, setGameWon] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const diceAudioRef = useRef(new Audio('/sounds/dice_roll-96878.mp3'));
  const timerRef = useRef(null);
  const [width, height] = useWindowSize(); // or use window.innerWidth/Height


  function rollDice() {
    if (gameWon) {
      resetGame();
      return;
    }

    if (!startTime) {
      setStartTime(Date.now()); // Start timer on first roll
    }

    
    const audio = diceAudioRef.current;
    audio.currentTime = 0.2;
    audio.play();
    setIsRolling(true);

    setTimeout(() => {
      setDice(oldDice =>
        oldDice.map(die =>
          die.isHeld ? die : generateRandomDie(die.id)
        )
      );
      setIsRolling(false);
    }, 500);
  }

  function toggleHold(id) {
    if (!startTime) {
      setStartTime(Date.now()); // Start timer on first roll
    }

    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  function resetGame() {
    setDice(allNewDice());
    setGameWon(false);
    setElapsedTime(0);
    setStartTime(null);
    clearInterval(timerRef.current);
  }

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSameValue = dice.every((die) => die.value === dice[0].value);

    if (allHeld && allSameValue) {
      setGameWon(true);
      setIsRolling(false);
      clearInterval(timerRef.current);

      const gameWonAudio = new Audio('/sounds/goodresult-82807.mp3');
      gameWonAudio.play();

      alert(`Congratulations! You've won in ${elapsedTime} seconds!`);
    }
  }, [dice]);

  useEffect(() => {
    if (startTime && !gameWon) {
      timerRef.current = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(Math.floor((currentTime - startTime) / 1000));
      }, 1000);
    }

    return () => clearInterval(timerRef.current); // Cleanup on unmount or win
  }, [startTime, gameWon]);

  return (
    <main>
     {gameWon && <Confetti width={width} height={height} recycle={false}/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      <p  className="timer"><strong>Time:</strong> {elapsedTime} seconds</p>
      <Die
        dies={dice}
        rollDice={rollDice}
        toggleHold={toggleHold}
        isRolling={isRolling}
        gameWon={gameWon}
      />
    </main>
  );
}
