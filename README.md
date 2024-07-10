# Anti-chessboard

<h2>Chess Game</h2>
 <h3>A simple chess game built using React, chess.js, and react-toastify.</h3>

<strong>Table of Contents
Overview
Features
Setup Instructions
Usage
Folder Structure
Credits
License
Overview</strong>
This project implements a chess game using React for the frontend interface, chess.js for chess rules and logic, and react-toastify for notifications. It provides a responsive chessboard interface where two players can play by making legal moves and following standard chess rules.
<p></p>

<h2>Features</h2>
<ul>
<li>Player turn indication and notifications for illegal moves, game outcomes, and player actions.
</li>
<li>Quit confirmation modal.</li>
<li>Restart game functionality.</li>
<li>Highlighting possible moves for pieces on hover/click.</li>
</ul>

Setup Instructions
To run this project locally, follow these steps:
Clone the repository:

bash
git clone https://github.com/your-username/chess-game.git
cd chess-game
Install dependencies:
bash
npm install
Start the development server:
bash
npm start
Open your browser:
Open http://localhost:3000 to view the app in the browser.
Usage
Players can click or drag pieces to make moves on the chessboard.
Notifications will appear for illegal moves, game outcomes, and player actions.
Use the "Quit" button to open a modal for confirming quitting the game.
Use the "Restart" button to restart the game from the beginning.
Folder Structure
The project directory structure is organized as follows:

chess-game/
│
├── public/            # Static assets and index.html
│
├── src/               # Source files
│   ├── Components/    # React components (Chessboard, GameInfo, QuitModal)
│   ├── App.css        # Styles specific to App component
│   ├── App.jsx        # Main React component containing game logic
│   └── index.js       # Entry point for React application
│
├── .gitignore         # Specifies files to be ignored by Git
├── package.json       # Project dependencies and scripts
├── README.md          # Project overview, setup instructions, and usage guide
└── LICENSE            # License information for the project
Credits
React
chess.js
react-chessboard
react-toastify
License
This project is licensed under the MIT License - see the LICENSE file for details.