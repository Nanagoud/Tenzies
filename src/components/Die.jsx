export default function Die({ dies, rollDice, toggleHold, isRolling, gameWon }) {
    return (
        <>
            <div className="dies-container">
                {dies.map(die => (
                    <div
                        key={die.id}
                        className={`die-face ${die.isHeld ? 'held' : ''} ${isRolling && !die.isHeld ? 'rolling' : ''}`}
                        onClick={() => toggleHold(die.id)}
                    >
                        {String.fromCharCode(0x267F + die.value)}
                    </div>
                ))}

            </div>
            <button className="roll-button" onClick={rollDice} disabled={isRolling}>
                {isRolling ?
                    "Rolling..." :
                    gameWon ? "Start New Game" : "Roll"}
            </button>
        </>
    );
}
