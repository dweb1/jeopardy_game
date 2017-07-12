$('.questionButton').on('click', function() {
	var buttonClicked = event.target.id;
	if (buttonClicked === "firstQuestionButton") {
		console.log(firstQuestion.question);
	}
	});

var firstQuestion = {
	question: "Famous for his characters Horton, the Cat in the Hat and Suzy Lou Who, this author remains a staple in most nursery school libraries.",
	rightAnswer: "Who is Dr. Seuss?",
	wrongAnswers: ["Who is A.A. Milne?", "Who is Roald Dahl?", "Who is Hans Christian Andersen?"]
}

var secondQuestion = {
	question: "",
	rightAnswer: "",
	wrongAnswers: []
}

var thirdQuestion = {
	question: "",
	rightAnswer: "",
	wrongAnswers: []
}

var fourthQuestion = {
	question: "",
	rightAnswer: "",
	wrongAnswers: []
}

var fifthQuestion = {
	question: "",
	rightAnswer: "",
	wrongAnswers: []
}