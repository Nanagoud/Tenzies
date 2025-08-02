# Tenziee - Dice Game

Welcome to **Tenzies**, a fun and addictive dice game built with **React**! Roll the dice, hold the ones you want, and race to make them all match.

🔗 [Play the Game](https://tenzies-puce-chi.vercel.app/)

A fun and interactive dice game built with React and Vite where players roll dice to get all ten dice showing the same value.

## 🎲 Game Description

Tenzies is a dice game where the objective is to roll ten dice until they all show the same number. Players can hold individual dice by clicking on them, preventing them from changing on subsequent rolls. The game tracks the time it takes to complete the challenge and provides audio feedback for an enhanced gaming experience.

## ✨ Features

- **Interactive Dice Rolling**: Click the roll button to generate new random values for unheld dice
- **Dice Holding**: Click on any die to hold it at its current value
- **Timer**: Tracks how long it takes to complete the game
- **Audio Effects**: 
  - Dice rolling sound effects
  - Victory celebration sound when you win
- **Visual Feedback**: 
  - Confetti animation when you win
  - Rolling animation for dice being re-rolled
  - Visual indication for held dice
- **Responsive Design**: Works on different screen sizes
- **Game Reset**: Start a new game after winning

## 🎯 How to Play

1. Click the "Roll" button to roll all dice
2. Click on any die you want to hold (it will stay the same value)
3. Continue rolling until all ten dice show the same number
4. When you win, confetti will appear and you'll hear a victory sound
5. Click "Start New Game" to play again

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tenziee
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **React Confetti** - Victory animation
- **React Hook Window Size** - Responsive design utilities
- **CSS** - Styling and animations

## 📁 Project Structure

```
tenziee/
├── public/
│   └── sounds/          # Audio files for game effects
├── src/
│   ├── components/
│   │   └── Die.jsx      # Dice component
│   ├── App.jsx          # Main game logic
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## 🎮 Game Logic

- The game uses 10 dice with values from 1-6
- Players can hold individual dice by clicking them
- The game is won when all dice are held and show the same value
- A timer tracks the time from the first roll to victory
- Audio feedback enhances the gaming experience

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint


Enjoy playing Tenziee! 🎲✨
