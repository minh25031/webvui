import { useState } from 'react'
import './App.css'
import KoreanPage from './KoreanPage' // Import file mới tách

function App() {
  const [currentPage, setCurrentPage] = useState<'troll' | 'korean'>('troll')
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [isStarted, setIsStarted] = useState(false)
  const [yesSize, setYesSize] = useState(1)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('Chọc em được không?')
  const [isGameWon, setIsGameWon] = useState(false)

  const trollMessages = [
    "Đố bắt được em! 🏃‍♂️", "Yếu thế? Bấm lại xem nào! 😂",
    "Lêu lêu, hụt rồi nha! 😜", "Càng bấm hụt em càng yêu bạn! 🥰",
    "Bướng thế nhỉ? Nhấn 'Yes' đi! 💖"
  ];

  const moveNoButton = () => {
    if (!isStarted) setIsStarted(true);
    const padding = 100;
    const randomX = Math.random() * (window.innerWidth - padding * 2) + padding;
    const randomY = Math.random() * (window.innerHeight - padding * 2) + padding;
    setNoButtonPos({ x: randomX, y: randomY });
    setScore(prev => prev + 1);
    setYesSize(prev => prev + 0.15);
    setMessage(trollMessages[Math.floor(Math.random() * trollMessages.length)]);
  };

  return (
    <div className="container">
      {currentPage === 'troll' ? (
        <div className="game-card">
          <h1>{isGameWon ? '🏆 THẮNG RỒI' : '🎮 Zui zẻ'}</h1>
          <p className="subtitle">
            {isGameWon ? 'Hello Bảo Ngọc!' : 'Em có thể nhấn "Yes" không? 😏'}
          </p>
          
          <div className="message-box">
            <p key={message}>{message}</p>
          </div>

          {!isGameWon ? (
            <div className="button-container">
              <button 
                className="btn btn-yes" 
                style={{ transform: `scale(${yesSize})` }} 
                onClick={() => setIsGameWon(true)}
              >
                Yes 💕
              </button>

              <button
                className="btn btn-no"
                style={isStarted ? {
                  position: 'fixed', left: 0, top: 0,
                  transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                  transition: 'all 0.15s ease-out'
                } : {}}
                onMouseEnter={moveNoButton}
              >
                No 👊
              </button>
            </div>
          ) : (
            <button className="btn btn-yes" onClick={() => window.location.reload()}>
              Chơi lại hông? 🔄
            </button>
          )}

          <div className="score">Số lần hụt: <strong>{score}</strong></div>

          <button className="nav-btn" onClick={() => setCurrentPage('korean')}>
            Học tiếng Hàn với em 📚 ➔
          </button>
        </div>
      ) : (
        /* Render Component đã tách */
        <KoreanPage onBack={() => setCurrentPage('troll')} />
      )}
    </div>
  )
}

export default App