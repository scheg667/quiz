import React, { useState } from 'react';
import styles from './Quiz.module.css';

const Quiz = () => {
    const questions = [
        { question: '1. Quelle planète du système solaire est la plus proche du Soleil?', answers: ['Jupiter', 'Mars', 'Mercure', 'Vénus'], correctIndex: 2 },
        { question: '2. Quel est le plus grand satellite naturel de la Terre?', answers: ['Phobos', 'Titan', 'Ganymède','Lune'], correctIndex: 3 },
        { question: ' 3. Quelle planète est souvent appelée la "planète rouge ?', answers: ['Mars', 'Jupiter', 'Uranus','Saturne'], correctIndex: 0 },
        { question: ' 4. Quel est le nom de la ceinture d\'astéroïdes située entre Mars et Jupiter?', answers: ['Ceinture de Kuiper', 'Ceinture d\'Orion', 'Ceinture d\'Astéroïdes','Ceinture de Van Allen'], correctIndex: 2 },
        { question: ' 5.  Quel est le plus grand gaz géant du système solaire?', answers: ['Saturne', 'Jupiter', 'Neptune','Uranus'], correctIndex: 1 },
        { question: ' 6. Quel est le nom du rover de la NASA qui a exploré la surface de Mars ?', answers: ['Voyager', 'Curiosity', 'Opportunity','Spirit'], correctIndex: 1 },
        { question: ' 7. Quelle est la période de révolution de la Terre autour du Soleil ?', answers: ['365 jours', '24 heures', '30 jours','12 heures'], correctIndex: 0 },
        { question: ' 8. Quelle planète du système solaire possède la journée la plus longue, en termes de rotation sur son axe?', answers: ['Mars', 'Jupiter', 'Mount Olympus','Etna Mons'], correctIndex: 1 },
        { question: ' 9. Quel est le nom du plus grand volcan du système solaire, situé sur la planète Mars?', answers: ['Vesuvius Mons', 'Mauna Kea', 'Uranus','Saturne'], correctIndex: 0 },
        { question: ' 10. Quelle lune de Saturne est connue pour avoir des geysers de glace sur sa surface', answers: ['Titan', 'Europe', 'Io','Encelade'], correctIndex: 3 },
]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [result, setResult] = useState('');
    const [quizCompleted, setQuizCompleted] = useState(false);

    const showQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        return (
            <div>
                <p id="question">{currentQuestion.question}</p>
                <div id="answer-buttons" className={`${styles.answerButtons} btn-container`}>
                    {currentQuestion.answers.map((answer, index) => (
                        <button key={index} className="btn" onClick={() => checkAnswer(index)}>{answer}</button>
                    ))}
                </div>
            </div>
        );
    };

    const checkAnswer = (selectedIndex) => {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = selectedIndex === currentQuestion.correctIndex;
  
      if (isCorrect) {
          setResult('Réponse correcte !');
      } else {
          setResult('Réponse incorrecte.');
      }

        // Passez à la question suivante
        // nextQuestion();  
    };

    const nextQuestion = () => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
          setQuizCompleted(true);
      }
      setResult('');
    };

    const changeQuestion = (direction) => {
        const newIndex = currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < questions.length) {
            setCurrentQuestionIndex(newIndex);
        }
    };

    return (
      <div className={styles.quizContainer}>
        {quizCompleted ? (
          <div>
            {questions.map((question, index) => (
              <div key={index} className={styles.resultContainer}>
                <p>{question.question}</p>
                <p>Bonne réponse : {question.answers[question.correctIndex]}</p>
              </div>
            ))}
          </div>

        ) : (
          <div>
            <h1>QUIZ</h1>
            <div className={styles.questionContainer}>
              <p id="question">{questions[currentQuestionIndex].question}</p>
            </div>
            <div className={styles.answerButtons}>
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <button key={index} className={styles.btn} onClick={() => checkAnswer(index)}>
                  {answer}
                </button>
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.btn} id="prev-btn" onClick={() => changeQuestion(-1)}>
                Question précédente
              </button>
              <button className={styles.btn} id="next-btn" onClick={nextQuestion}>
                {currentQuestionIndex + 1 === questions.length ? 'Voir les réponses' : 'Question suivante'}
              </button>
            </div>
            <p className={styles.resultContainer} id="result">{result}</p>
          </div>
        )}
      </div>
    );
    
  
}

export default Quiz;