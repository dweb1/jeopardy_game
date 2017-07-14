var currentScore = 0;
var indexOfLitQuestions;

$('.questionButton').on('click', function() {
	var buttonClicked = event.target.id;
	if (buttonClicked === "firstQuestionButton") {
		$('.modal-header').html(litQuestions[0].question);
		$('#firstOption').html(litQuestions[0].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[0].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[0].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[0].choosableAnswers[3]);
		i = 0;
	} else if (buttonClicked === "secondQuestionButton") {
		$('.modal-header').html(litQuestions[1].question);
		$('#firstOption').html(litQuestions[1].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[1].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[1].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[1].choosableAnswers[3]);
		i = 1;
	} else if (buttonClicked === "thirdQuestionButton") {
		$('.modal-header').html(litQuestions[2].question);
		$('#firstOption').html(litQuestions[2].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[2].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[2].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[2].choosableAnswers[3]);
		i = 2;
	} else if (buttonClicked === "fourthQuestionButton") {
		$('.modal-header').html(litQuestions[3].question);
		$('#firstOption').html(litQuestions[3].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[3].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[3].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[3].choosableAnswers[3]);
		i = 3;
	} else if (buttonClicked === "fifthQuestionButton") {
		$('.modal-header').html(litQuestions[4].question);
		$('#firstOption').html(litQuestions[4].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[4].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[4].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[4].choosableAnswers[3]);
		i = 4;
	}
	})


var litQuestions =
	[
	{
	questionNumber: 1,
	value: 10,
	question: "Famous for his characters Horton, the Cat in the Hat and Suzy Lou Who, this author remains a staple in most nursery school libraries.",
	rightAnswer: "Who is Dr. Seuss?",
	choosableAnswers: ["Who is A.A. Milne?", "Who is Roald Dahl?", "Who is Dr. Seuss?", "Who is Hans Christian Andersen?"]
	},
	{
	questionNumber: 2,
	value: 20,
	question: "Drawing on inspiration from his time in Spain during that country's civil war, Ernest Hemingway wrote this novel while on vacation in Cuba in the late 1930s.",
	rightAnswer: "What is 'For Whom the Bell Tolls'?",
	choosableAnswers: ["What is 'For Whom the Bell Tolls'?", "What is 'The Sun Also Rises'?", "What is 'The Old Man and the Sea'?", "What is 'A Farewell to Arms'?"]
	},
	{
	questionNumber: 3,
	value: 30,
	question: "In this book, the insect-like state in which the protagonist wakes up is said to be an allusion to the isolation and alienation the author experienced living in Prague.",
	rightAnswer: "What is 'The Metamorphosis'?",
	choosableAnswers: ["What is 'Charlotte's Web'?", "What is 'The Catcher in the Rye'?", "What is 'The Stranger'?", "What is 'The Metamorphosis'?"]
	},
	{
	questionNumber: 4,
	value: 40,
	question: "Before her untimely death from lupus at the age of 39, this author's work focused on the literary trope of the grotesque in the American South.",
	rightAnswer: "Who is Flannery O'Connor?",
	choosableAnswers: ["Who is Sylvia Plath?", "Who is Flannery O'Connor?", "Who is Zora Neale Hurston?", "Who is Louisa May Alcott?"]
	},
	{
	questionNumber: 5,
	value: 50,
	question: "Remaining unpublished for over 40 years due to concern over Soviet persecution, this author's masterpiece is one of the 20th Century's best examples of satire and stars the devil and a giant, talking cat name Behemot.",
	rightAnswer: "Who is Mikhail Bulgakov?",
	choosableAnswers: ["Who is Alexander Solzhenitsyn?", "Who is Vladimir Nabokov?", "Who is Mikhail Bulgakov?", "Who is Nikolay Ostrovsky?"]
	}
	];

var playerInput;
$('.questionButton').on('click', function(event){
	playerInput = event.target.id;
})

function testAnswer() {
	$('#firstOption').on('click', function () {
		var grabAnswerElement = document.getElementById("firstOption");
		var answerClicked = grabAnswerElement.innerHTML;
		if (answerClicked === litQuestions[i].rightAnswer) {
			currentScore += litQuestions[i].value;
			$('#scoreCounter').html(currentScore);
		} else {
			currentScore -= litQuestions[i].value;
			$('#scoreCounter').html(currentScore);
		};
		});
	$('#secondOption').on('click', function () {
		var grabAnswerElement = document.getElementById("secondOption");
		var answerClicked = grabAnswerElement.innerHTML;
		if (answerClicked === litQuestions[i].rightAnswer) {
			currentScore += litQuestions[i].value;
			$('#scoreCounter').html(currentScore);
		} else {
			currentScore -= litQuestions[i].value;
			$('#scoreCounter').html(currentScore);
		};
	});
	$('#thirdOption').on('click', function () {
		var grabAnswerElement = document.getElementById("thirdOption");
		var answerClicked = grabAnswerElement.innerHTML;
		if (answerClicked === litQuestions[i].rightAnswer) {
			currentScore += litQuestions[i].value;
			$('#scoreCounter').html(currentScore);
		} else {
			currentScore -= litQuestions[i].value;
			$('#scoreCounter').html(currentScore);
		};
	});
	$('#fourthOption').on('click', function () {
		var grabAnswerElement = document.getElementById("fourthOption");
		var answerClicked = grabAnswerElement.innerHTML;
		if (answerClicked === litQuestions[i].rightAnswer) {
			currentScore += litQuestions[i].value;
			$('#scoreCounter').html(currentScore);
		} else {
			currentScore -= litQuestions[i].value;
			$('#scoreCounter').html(currentScore);
	}
	});
};

testAnswer();