const questions = [
	{
		question: "What is the capital of France?",
		options: ["London", "Madrid", "Paris", "Berlin"],
		correctAnswer: 2,
	},
	{
		question: "What is the capital of USA?",
		options: ["Texas", "Maryland", "New York", "Washington D.C."],
		correctAnswer: 3,
	},
];
let score = 0;
console.log(`Score: ${score}`);

const askQuestion = (num) => {
	console.log(questions[num].question);
	for (let i = 0; i < questions[num].options.length; i++) {
		console.log(`${i + 1}. `, questions[num].options[i]);
	}
};

const checkAnswer = (questionIndex, userAnswer) => {
	switch (userAnswer) {
		case questions[questionIndex].correctAnswer:
			console.log("Correct!");
			score++;
			console.log(`Score: ${score}`);
			break;
		default:
			console.log("Wrong!");
			break;
	}
};

for (let i = 0; i < questions.length; i++) {
	const questionIndex = i;
	askQuestion(i);
	const userAnswer = Number(prompt("Choose answer")) - 1;
	checkAnswer(questionIndex, userAnswer);
}
