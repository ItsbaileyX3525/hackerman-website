# Hackerman Website 🔐

Welcome to the Hackerman Website! An interactive educational platform designed to teach cybersecurity concepts, ethical hacking principles, and digital security awareness through engaging games and challenges.

## 🎮 Project Overview

This full-stack web application combines education with entertainment, featuring multiple interactive games and tools to help users learn about cybersecurity in a hands-on way. Built with Express.js backend and vanilla JavaScript frontend.

## ✨ Features

### 📚 Educational Content
- **About Hacking**: Comprehensive information about ethical vs unethical hacking, history, and cybersecurity principles
- **Resources**: Curated collection of cybersecurity books, tools, and learning materials
- **Flashcards**: Interactive flashcards covering key cybersecurity concepts and terminology

### 🎯 Interactive Games
- **Hacking Challenge**: 10-level progressive challenge teaching various hacking techniques:
  - HTML inspection and hidden elements
  - JavaScript console manipulation
  - Base64 decoding and obfuscation
  - URL parameter exploitation
  - Binary decoding
  - XSS (Cross-Site Scripting) demonstrations
  - Physical security awareness

- **Hackle**: A cybersecurity-themed Wordle variant using hacking terminology
- **Memory Game**: Test your knowledge retention with cybersecurity concepts
- **Interactive Terminal**: Learn Linux commands and ethical hacking tools in a simulated environment
- **Quest Mode**: RPG-style cybersecurity quiz with health points and progression

### 🔧 Security Tools
- **Password Creator/Checker**: Analyze password strength and generate secure passwords
- **Direct Access Shell**: Educational terminal simulator for learning command-line skills

## 🚀 Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hackerman-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the port shown in console)

### Production Deployment
The application includes serverless deployment capabilities with `serverless-http` for platforms like AWS Lambda.

## 📁 Project Structure

```
hackerman-website/
├── index.js                 # Main Express server
├── package.json            # Dependencies and scripts
├── routes/
│   └── submit.js           # API routes for game logic
└── public/                 # Static frontend files
    ├── index.html          # Main landing page
    ├── hackergame.html     # Hacking challenge game
    ├── games/              # Individual game pages
    │   ├── hackle.html     # Cybersecurity Wordle
    │   ├── flashcards.html # Interactive flashcards
    │   ├── quest.html      # RPG-style quiz
    │   └── shell.html      # Terminal simulator
    └── assets/
        ├── css/            # Stylesheets with cyberpunk theming
        ├── js/             # Game logic and interactions
        └── sounds/         # Audio effects for games
```

## 🎨 Technical Features

- **Responsive Design**: Works on desktop and mobile devices
- **Matrix-Style Animations**: Cyberpunk aesthetic with animated backgrounds
- **RESTful API**: Express.js backend handling game state and validation
- **Local Storage**: Progress saving for game completion
- **Audio Integration**: Sound effects for enhanced user experience
- **Security Demonstrations**: Safe, educational examples of common vulnerabilities

## 🎓 Educational Value

This platform teaches:
- **Web Security Fundamentals**: HTML inspection, JavaScript debugging, network analysis
- **Common Vulnerabilities**: XSS, SQL injection concepts, password security
- **Ethical Hacking Principles**: White hat vs black hat hacking, responsible disclosure
- **Cybersecurity Terminology**: Through flashcards and terminology games
- **Command Line Skills**: Via the interactive terminal simulator
- **Security Best Practices**: Password creation, social engineering awareness

## 🛡️ Security Note

All demonstrated "hacking" techniques are:
- Educational in nature
- Contained within the application
- Designed to teach defensive security concepts
- Examples of responsible security research

## 📄 Dependencies

- **express**: Web application framework
- **serverless-http**: Serverless deployment support
- **nodemon**: Development server with auto-restart

## 🎮 Game Credits

- **Josh Hughes**: Game playtesting and feedback
- **Phillip McHale**: Educational content and presentations  
- **Bailey Miles**: Full-stack development and implementation

## 📜 License

This project is licensed under the ISC License. Feel free to use for educational purposes.