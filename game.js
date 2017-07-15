var currentScore = 0;

for (var i = 1; i < 7; i++){
	$newColumn = $('<div>');
	$newColumn.addClass('categoryColumn');
	$newColumn.attr('id', "column" + i);
	$('#gameboard').append($newColumn);
	$newBox = $('<div>');
	$newBox.addClass('box');
	$("#column" + i).append($newBox);
		for (var j=1; j < 6; j++) {
			$newBox = $('<div>');
			$newBox.addClass('box questionButton');
			$newBox.attr("data-toggle", "modal").attr("data-target", "#myModal");
			$newBox.html("$" + j*10);
			$newBox.attr('id', 'questionBox' + i + j)
			$("#column" + i).append($newBox);
			};
	};

$('.questionButton').on('click', function() {
	var buttonClicked = event.target.id;
	if (buttonClicked === "questionBox11") {
		$('.modal-header').html(litQuestions[0].question);
		$('#firstOption').html(litQuestions[0].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[0].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[0].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[0].choosableAnswers[3]);
		i = 0;
	} else if (buttonClicked === "questionBox12") {
		$('.modal-header').html(litQuestions[1].question);
		$('#firstOption').html(litQuestions[1].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[1].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[1].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[1].choosableAnswers[3]);
		i = 1;
	} else if (buttonClicked === "questionBox13") {
		$('.modal-header').html(litQuestions[2].question);
		$('#firstOption').html(litQuestions[2].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[2].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[2].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[2].choosableAnswers[3]);
		i = 2;
	} else if (buttonClicked === "questionBox14") {
		$('.modal-header').html(litQuestions[3].question);
		$('#firstOption').html(litQuestions[3].choosableAnswers[0]);
		$('#secondOption').html(litQuestions[3].choosableAnswers[1]);
		$('#thirdOption').html(litQuestions[3].choosableAnswers[2]);
		$('#fourthOption').html(litQuestions[3].choosableAnswers[3]);
		i = 3;
	} else if (buttonClicked === "questionBox15") {
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
	category: "Literature",
	value: 10,
	question: "Famous for his characters Horton, the Cat in the Hat and Suzy Lou Who, this author remains a staple in most nursery school libraries.",
	rightAnswer: "Who is Dr. Seuss?",
	choosableAnswers: ["Who is A.A. Milne?", "Who is Roald Dahl?", "Who is Dr. Seuss?", "Who is Hans Christian Andersen?"]
	},
	{
	category: "Literature",
	questionNumber: 2,
	value: 20,
	question: "Drawing on inspiration from his time in Spain during that country's civil war, Ernest Hemingway wrote this novel while on vacation in Cuba in the late 1930s.",
	rightAnswer: "What is 'For Whom the Bell Tolls'?",
	choosableAnswers: ["What is 'For Whom the Bell Tolls'?", "What is 'The Sun Also Rises'?", "What is 'The Old Man and the Sea'?", "What is 'A Farewell to Arms'?"]
	},
	{
	category: "Literature",
	questionNumber: 3,
	value: 30,
	question: "In this book, the insect-like state in which the protagonist wakes up is said to be an allusion to the isolation and alienation the author experienced living in Prague.",
	rightAnswer: "What is 'The Metamorphosis'?",
	choosableAnswers: ["What is 'Charlotte's Web'?", "What is 'The Catcher in the Rye'?", "What is 'The Stranger'?", "What is 'The Metamorphosis'?"]
	},
	{
	category: "Literature",
	questionNumber: 4,
	value: 40,
	question: "Before her untimely death from lupus at the age of 39, this author's work focused on the literary trope of the grotesque in the American South.",
	rightAnswer: "Who is Flannery O'Connor?",
	choosableAnswers: ["Who is Sylvia Plath?", "Who is Flannery O'Connor?", "Who is Zora Neale Hurston?", "Who is Louisa May Alcott?"]
	},
	{
	category: "Literature",
	questionNumber: 5,
	value: 50,
	question: "Remaining unpublished for over 40 years due to concern over Soviet persecution, this author's masterpiece is one of the 20th Century's best examples of satire and stars the devil and a giant, talking cat name Behemot.",
	rightAnswer: "Who is Mikhail Bulgakov?",
	choosableAnswers: ["Who is Alexander Solzhenitsyn?", "Who is Vladimir Nabokov?", "Who is Mikhail Bulgakov?", "Who is Nikolay Ostrovsky?"]
	}
	];

var worldCapitalQuestions =
	[
	{
	category: "World Capitals",
	value: 10,
	question: "Containing more than 20 million people in the municipal area, this capital city is the world's most populous.",
	rightAnswer: "What is Beijing?",
	choosableAnswers: ["What is New Dehli?", "What is Manila?", "What is Tokyo?", "What is Beijing?"]
	},
	{
	category: "World Capitals",
	value: 20,
	question: "The views from this capital, the world's highest in elevation, must be rather peaceful.",
	rightAnswer: "What is La Paz?",
	choosableAnswers: ["What is Addis Ababa", "What is La Paz?", "What is Quito?", "What is Bogota?"]
	},
	{
	category: "World Capitals",
	value: 30,
	question: "The fallout from the interrupted passage of a VIP motorcade in this city played a hand in kicking off the First World War.",
	rightAnswer: "What is Sarajevo?",
	choosableAnswers: ["What is Sarajevo?", "What is Paris?", "What is Berlin?", "What is Brussels?"]
	},
	{
	category: "World Capitals",
	value: 40,
	question: "Serving as capital of different nations and republics consecutively since 1841, this city sits at the confluence of the Rivers Danube and Sava.",
	rightAnswer: "What is Belgrade?",
	choosableAnswers: ["What is Vienna?", "What is Belgrade?", "What is Budapest?", "What is Bratislava?"]
	},
	{
	category: "World Capitals",
	value: 50,
	question: "Located at over -41 degrees Latitude, this former British colonial city was appointed captial in 1865.",
	rightAnswer: "What is Wellington?",
	choosableAnswers: ["What is Montevideo?", "What is Cape Town?", "What is Wellington?", "What is Canberra?"]
	}
	];

var movieQuestions =
	[
	{
	category: "Movies",
	value: 10,
	question: "Not of much use to man made of metal, this is what the Tin Man wish for in the 'Wizard of Oz'.",
	rightAnswer: "What is a heart?",
	choosableAnswers: ["What is a brain?", "What is a heart?", "What is courage?", "What is food?"]
	},
	{
	category: "Movies",
	value: 20,
	question: "Drawing on inspiration from the Brothers Grimm, this was Disney's first feature length film to utilize cel animation and took over 5 years to animate.",
	rightAnswer: "What is Snow White and the Seven Dwarfs.",
	choosableAnswers: ["What is 'Snow White and the Seven Dwarfs'?", "What is 'Bambi'?", "What is 'Cinderella'?", "What is 'Fantasia'?"]
	},
	{
	category: "Movies",
	value: 30,
	question: "Starring in only his second role on the silver screen, Jim Brown featured alongside Lee Marvin and Charles Bronson as members of a rag-tag band of convicts on a top secret Army mission.",
	rightAnswer: "What is 'The Dirty Dozen'?",
	choosableAnswers: ["What is 'Slaughter'?", "What is 'Three the Hard Way'?", "What is 'Mars Attacks'?", "What is 'The Dirty Dozen'?"]
	},
	{
	category: "Movies",
	value: 40,
	question: "This actor had a close working relationship with director Alfred Hitchcock with whom he worked on four different feature films - famously and finally in the film 'Vertigo'.",
	rightAnswer: "Who is James Stewart?",
	choosableAnswers: ["Who is John Longden?", "Who is James Stewart?", "Who is Cary Grant?", "Who is Anthony Perkins?"]
	},
	{
	category: "Movies",
	value: 50,
	question: "Although the novel from which it draws inspiration is set in Belgian Congo, Stanley Kubrik's Apocalypse Now takes place in what former French colony?",
	rightAnswer: "What is Vietnam?",
	choosableAnswers: ["What is Mauritania?", "What is Senegal?", "What is Vietnam", "What is New Caledonia?"]
	}
	];

var theArtsQuestions =
	[
	{
	category: "The Arts",
	value: 10,
	question: "Premiering in 1877, this renowned ballet seen here is based loosely on Russian folk tales.",
	imageSouce: "swan_lake.jpg",
	rightAnswer: "What is 'Swan Lake'?",
	choosableAnswers: ["What is /Giselle'?", "What is 'Sleeping Beauty'?", "What is 'Swan Lake'?", "What is the 'Nutcracker'?"]
	},
	{
	category: "The Arts",
	value: 20,
	question: "Despite the name of this instrument's type of string being referred to as 'catgut', they are actually made of sheep's intestines.",
	rightAnswer: "What is a violin?",
	choosableAnswers: ["What is a mandolin?", "What is a piano?", "What is a cello?", "What is a violin?"]
	},
	{
	category: "The Arts",
	value: 30,
	question: "This Spanish Surrealist painter, whose work is seen here, was known for his vivid use of color",
	imageSouce: "miro.jpg",
	rightAnswer: "Who is Miro?",
	choosableAnswers: ["Who is Picasso?", "Who is Miro?", "Who is Dali?", "Who is Dominguez?"]
	},
	{
	category: "The Arts",
	value: 40,
	question: "Michelangelo is reputed to have chiseled his famous David out of a single block of this type of marble.",
	rightAnswer: "What is Carrara marble?",
	choosableAnswers: ["What is Parian marble?", "What is Pentelic marble?", "What is Carrara marble?", "What is Alabaster marble?"]
	},
	{
	category: "The Arts",
	value: 50,
	question: "This classical muscial composition comes from the latin for 'harmony' or an 'agreement of sounds'.",
	rightAnswer: "What is a symphony?",
	choosableAnswers: ["What is a symphony?", "What is an orchestration?", "What is a fugue?", "What is a concerto?"]
	}
	];

var wildAnimals =
	[
	{
	category: "Wild Animals",
	value: 10,
	question: "These animals, prevalent throughout all of North America, are a known nuisance for gardeners and are named for the distinctive look of their hindparts.",
	rightAnswer: "What is the White-tailed deer?",
	choosableAnswers: ["What is the Eastern raccoon?", "What is the gopher", "What is the Cottontail rabbit?", "What is the White-tailed deer?"]
	},
	{
	category: "Wild Animals",
	value: 20,
	question: "Popular in Native American folklore, this animal is often portrayed as a trickster and often can take the form of a man.",
	rightAnswer: "What is a coyote?",
	choosableAnswers: ["What is a crocodile?", "What is a coyote?", "What is a wolf?", "What is a mountain lion?"]
	},
	{
	category: "Wild Animals",
	value: 30,
	question: "Rather than chasing its prey, this wild cat instead will stalk and, when it is merely a few feet away, opt instead to pounce and smother.",
	rightAnswer: "What is a serval?",
	choosableAnswers: ["What is a bobcat?", "What is a mountain lion?", "What is a serval?", "What is a cheetah?"]
	},
	{
	category: "Wild Animals",
	value: 40,
	question: "Considered the most deadly threat to humans in the entire world, this animal causes over 1 million deaths every single year.",
	rightAnswer: "What is the mosquito?",
	choosableAnswers: ["What is the mosquito?", "What is the wolf?", "What is the lion?", "What is the rattlesnake?"]
	},
	{
	category: "Wild Animals",
	value: 50,
	question: "A community of this animal, the world's fastest bird, famously has developed nests among the highest floors of New York's skyscrapers and feed off of that city's pigeon and rat population.",
	rightAnswer: "What is the Peregrine falcon?",
	choosableAnswers: ["What is the Bald eagle?", "What is the Red-tailed hawk?", "What is the Golden eagle?", "What is the Peregrine falcon?"]
	}
	];

var ???? =
	[
	{
	category: "",
	value: 10,
	question: "",
	rightAnswer: "",
	choosableAnswers: ["", "", "", ""]
	},
	{
	category: "",
	value: 20,
	question: "",
	rightAnswer: "",
	choosableAnswers: ["", "", "", ""]
	},
	{
	category: "The Arts",
	value: 30,
	question: "",
	rightAnswer: "",
	choosableAnswers: ["", "", "", ""]
	},
	{
	category: "",
	value: 40,
	question: "",
	rightAnswer: "",
	choosableAnswers: ["", "", "", ""]
	},
	{
	category: "",
	value: 50,
	question: "",
	rightAnswer: "",
	choosableAnswers: ["", "", "", ""]
	}
	];

var $playerInput;
$('.questionButton').on('click', function(event){
	$playerInput = event.target.id;
})

function testAnswer() {
	$('#firstOption').on('click', function () {
		var grabAnswerElement = document.getElementById("firstOption");
		var answerClicked = grabAnswerElement.innerHTML;
		if (answerClicked === litQuestions[i].rightAnswer) {
			currentScore += litQuestions[i].value;
			whatHappensAfterAnswer();
		} else {
			currentScore -= litQuestions[i].value;
			whatHappensAfterAnswer();
		};
		});
	$('#secondOption').on('click', function () {
		var grabAnswerElement = document.getElementById("secondOption");
		var answerClicked = grabAnswerElement.innerHTML;
		if (answerClicked === litQuestions[i].rightAnswer) {
			currentScore += litQuestions[i].value;
			whatHappensAfterAnswer();
		} else {
			currentScore -= litQuestions[i].value;
			whatHappensAfterAnswer();
		};
	});
	$('#thirdOption').on('click', function () {
		var grabAnswerElement = document.getElementById("thirdOption");
		var answerClicked = grabAnswerElement.innerHTML;
		if (answerClicked === litQuestions[i].rightAnswer) {
			currentScore += litQuestions[i].value;
			whatHappensAfterAnswer();
		} else {
			currentScore -= litQuestions[i].value;
			whatHappensAfterAnswer();
		};
	});
	$('#fourthOption').on('click', function () {
		var grabAnswerElement = document.getElementById("fourthOption");
		var answerClicked = grabAnswerElement.innerHTML;
		if (answerClicked === litQuestions[i].rightAnswer) {
			currentScore += litQuestions[i].value;
			whatHappensAfterAnswer();
		} else {
			currentScore -= litQuestions[i].value;
			whatHappensAfterAnswer();
	}
	});
};

function whatHappensAfterAnswer(){
	$('.modal').modal('hide');
	$('#scoreCounter').html(currentScore);
	$("#" + $playerInput).prop('disabled', true);
	$("#" + $playerInput).html("");
};

testAnswer();