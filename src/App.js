import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			 
			questionText: 'Kay Qazi Muhammad mrd?',
			answerOptions: [
				{ answerText: '1949', isCorrect: false },
				{ answerText: '1946', isCorrect: false },
				{ answerText: '1947', isCorrect: true },
				{ answerText: '1943', isCorrect: false },
			],
		},
		{
			questionText: 'kay komare mahabat damazra ?',
			answerOptions: [
				{ answerText: '1949', isCorrect: false },
				{ answerText: '1946', isCorrect: true },
				{ answerText: '1950', isCorrect: false },
				{ answerText: '1943', isCorrect: false },
			],
		},
		{
			questionText: 'kay raparin daste pe krd ?',
			answerOptions: [
				{ answerText: '1991', isCorrect: true },
				{ answerText: '1999', isCorrect: false },
				{ answerText: '1992', isCorrect: false },
				{ answerText: '2000', isCorrect: false },
			],
		},
		{
			questionText: 'kay peymanay lozan wazhokra ',
			answerOptions: [
				{ answerText: '1919', isCorrect: false },
				{ answerText: '1943', isCorrect: false },
				{ answerText: '1926', isCorrect: false },
				{ answerText: '1923', isCorrect: true },
			],
		},
	];
		const [cureentQuestion, setCurrentQuestion] = useState(0);
		const [score, setScore] = useState(0);
		const [showcore, setShowScore] = useState(false);

	
		const handleAnswerButtonClik = (isCorrect) => {

			if(isCorrect===true){
				
				setScore(score + 1)
			}
			const nextQuestion = cureentQuestion + 1;
			if(nextQuestion < questions.length) {
				setCurrentQuestion(nextQuestion);

			} else{
				setShowScore(true);
			}
		};
	return (
		<div className='app'>
		
			
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showcore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				
				</div>
			) : (
				<>
					
					<div className='question-section'>
					
						<div className='question-count'>
							
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[cureentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[cureentQuestion].answerOptions.map((answerOptions) => <button onClick={()=> handleAnswerButtonClik(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}
