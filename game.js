$('.questionButton').on('click', function() {
	var buttonClicked = event.target.id;
	if (buttonClicked === "firstQuestionButton") {
		$('.modal-header').html(firstQuestion.question);
		$('#firstOption').html(firstQuestion.rightAnswer);
		$('#secondOption').html(firstQuestion.wrongAnswers[0]);
		$('#thirdOption').html(firstQuestion.wrongAnswers[1]);
		$('#fourthOption').html(firstQuestion.wrongAnswers[2]);
	} else if (buttonClicked === "secondQuestionButton") {
		$('.modal-header').html(secondQuestion.question);
		$('#firstOption').html(secondQuestion.rightAnswer);
		$('#secondOption').html(secondQuestion.wrongAnswers[0]);
		$('#thirdOption').html(secondQuestion.wrongAnswers[1]);
		$('#fourthOption').html(secondQuestion.wrongAnswers[2]);
	} else if (buttonClicked === "thirdQuestionButton") {
		$('.modal-header').html(thirdQuestion.question);
		$('#firstOption').html(thirdQuestion.rightAnswer);
		$('#secondOption').html(thirdQuestion.wrongAnswers[0]);
		$('#thirdOption').html(thirdQuestion.wrongAnswers[1]);
		$('#fourthOption').html(thirdQuestion.wrongAnswers[2]);
	} else if (buttonClicked === "fourthQuestionButton") {
		$('.modal-header').html(fourthQuestion.question);
		$('#firstOption').html(fourthQuestion.rightAnswer);
		$('#secondOption').html(fourthQuestion.wrongAnswers[0]);
		$('#thirdOption').html(fourthQuestion.wrongAnswers[1]);
		$('#fourthOption').html(fourthQuestion.wrongAnswers[2]);
	} else if (buttonClicked === "fifthQuestionButton") {
		$('.modal-header').html(fifthQuestion.question);
		$('#firstOption').html(fifthQuestion.rightAnswer);
		$('#secondOption').html(fifthQuestion.wrongAnswers[0]);
		$('#thirdOption').html(fifthQuestion.wrongAnswers[1]);
		$('#fourthOption').html(fifthQuestion.wrongAnswers[2]);
	}
	});

var firstQuestion = {
	question: "Famous for his characters Horton, the Cat in the Hat and Suzy Lou Who, this author remains a staple in most nursery school libraries.",
	rightAnswer: "Who is Dr. Seuss?",
	wrongAnswers: ["Who is A.A. Milne?", "Who is Roald Dahl?", "Who is Hans Christian Andersen?"]
}

var secondQuestion = {
	question: "Drawing on inspiration from his time in Spain during that country's civil war, Ernest Hemingway wrote this novel while on vacation in Cuba in the late 1930s.",
	rightAnswer: "What is 'For Whom the Bell Tolls'?",
	wrongAnswers: ["What is 'The Sun Also Rises'?", "What is 'The Old Man and the Sea'?", "What is 'A Farewell to Arms'?"]
}

var thirdQuestion = {
	question: "",
	rightAnswer: "",
	wrongAnswers: []
}

var fourthQuestion = {
	question: "Before her untimely death from lupus at the age of 39, this author's work focused on the literary trope of the grotesque in the American South.",
	rightAnswer: "Who is Flannery O'Connor?",
	wrongAnswers: ["Who is Sylvia Plath?", "Who is Zora Neale Hurston?", "Who is Louisa May Alcott?"]
}

var fifthQuestion = {
	question: "",
	rightAnswer: "",
	wrongAnswers: []
}