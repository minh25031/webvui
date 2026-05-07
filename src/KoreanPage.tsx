import React, { useState } from 'react';
import { KOREAN_LESSONS } from './mockData';
// Sử dụng 'import type' và đảm bảo nó được gán cho biến/hàm
import type { Flashcard } from './mockData'; 

interface KoreanPageProps {
  onBack: () => void;
}

const KoreanPage: React.FC<KoreanPageProps> = ({ onBack }) => {
  // Hàm tạo câu hỏi mới - sử dụng Flashcard ở đây để hết lỗi "never read"
  const createNewQuestion = () => {
    const randomQuestion: Flashcard = KOREAN_LESSONS[Math.floor(Math.random() * KOREAN_LESSONS.length)];
    
    const otherOptions = KOREAN_LESSONS
      .filter(item => item.vi !== randomQuestion.vi)
      .map(item => item.vi);
      
    const distractors = otherOptions
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
      
    const allOptions = [...distractors, randomQuestion.vi].sort(() => 0.5 - Math.random());
    
    return {
      question: randomQuestion,
      options: allOptions
    };
  };

  // Khởi tạo state
  const [quiz, setQuiz] = useState(() => createNewQuestion());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleNextQuestion = () => {
    setQuiz(createNewQuestion());
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    setIsCorrect(answer === quiz.question.vi);
  };

  return (
    <div className="game-card vocab-page-container">
      <button className="back-link" onClick={onBack}>⇠ Quay lại chọc tiếp</button>
      <h1>🇰🇷 Quizlet Test</h1>
      
      <div className="quiz-section">
        <div className="question-box">
          <span className="type-tag">{quiz.question.type}</span>
          <h2 className="kr-question">{quiz.question.kr}</h2>
          <p style={{ color: '#666' }}>Nghĩa của từ này là gì?</p>
        </div>

        <div className="options-grid">
          {quiz.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                selectedAnswer === option 
                  ? (isCorrect ? 'correct' : 'wrong') 
                  : (selectedAnswer && option === quiz.question.vi ? 'correct' : '')
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer && (
          <div className="result-feedback">
            {isCorrect ? (
              <p className="txt-success">Chính xác! Giỏi quá ta 😍</p>
            ) : (
              <p className="txt-error">Sai rồi, đáp án là: {quiz.question.vi} 🥺</p>
            )}
            <button className="next-btn" onClick={handleNextQuestion}>
              Câu tiếp theo ➔
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KoreanPage;