$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 20,
		reset: function() {
			this.time = 20;
			//$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
var correct = 0;
var incorrect = 0;
var unanswer = 0;
var q1 = {
	question : 'In the Disney Cartoon, who is Donald Duck’s girlfriend?',
	possibleAnswers : [	'A. Minnie Duck',
				 		'B. Daisy Duck',
				 		'C. Delilah Duck',
				 		'D. Rose Duck'],
	flags : [false, true, false, false],
	answer : 'B. Daisy Duck'
};

var q2 = {
	question: 'Who does Ariel fall in love with in “The Little Mermaid”?',
	possibleAnswers: ['A. Prince Charming',
				      'B. Prince Romeo',
				      'C. Prince Eric',
				      'D. Prince Eric'],
	flags : [false, false, true, false],
	answer : 'C. Prince Eric'
};

var q3 = {
	question : 'What was the first Disney movie created?',
	possibleAnswers :  ['A. Snow White and the Seven Dwarfs',
						'B. Cinderella',
						'C. The Sleeping Beauty',
						'D. The Beauty and the Beast'],
						
	flags : [true, false, false, false],
	answer : 'A. Snow White and the Seven Dwarfs'
};

var q4 = {
	question : 'When was the first Disney movie created?',
	possibleAnswers : [ 'A. 1928',
						'B. 1941',
						'C. 1920',
						'D. 1937'],

	flags : [false, false, false, true],
	answer : 'D.1937'
};

var q5 = {
	question : 'What is the name of the island that the main character calls home in the movie “Moana”?',
	possibleAnswers : [ 'A. Taveuni',
						'B. Aitutaki',
						'C. Motunui',
						'D. Maui'],

	flags : [false, false, true, false],
	answer : 'C.Motunui'
};

var q6 = {
	question : 'Which one isn’t the name of one of the fairies in “Sleeping Beauty”?',
	possibleAnswers : [ 'A. Flora',
						'B. Fauna',
						'C. Merryweather',
						'D. Vidia'],

	flags : [false, false, false, true],
	answer : 'D. Vidia'
};

var q7 = {
	question : 'What is the name of Mickey Mouse’s Dog?',
	possibleAnswers : [ 'A. Ruff',
						'B. Mars',
						'C. Pluto',
						'D. Saturn'],

	flags : [false, false, true, false],
	answer : 'C. Pluto'
};

var q8 = {
	question : 'What team did Babe Ruthe play for before joining the Boston Red Sox?',
	possibleAnswers : ['A. New York Yankees',
						'B. Cincinnati Reds',
						'C. Baltimore Orioles',
						'D. Boston Braves'],

	flags : [false, false, true, false],
	answer : 'C. Baltimore Orioles'
};

var q9 = {
	question : 'In what year did the Spanish Civil War begin?',
	possibleAnswers : [ 'A. 1886',
						'B. 1904',
						'C. 1951',
						'D. 1936'],
						
	flags : [false, false, false, true],
	answer : 'D. 1936'
};

var q10 = {
	question : 'In what city will you find the Red Square?',
	possibleAnswers : ['A. Moscow',
						'B. Beijing',
						'C. New York City',
						'D. San Francisco'],
	flags : [true, false, false, false],
	answer : 'A. Moscow'
}
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).show();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	});
}

function answerCorrect() {
	correct++;
	var correctAnswerText = "Correct! The answer is: " + questionArray[index].answer;
	$(".correctAnswer").html(correctAnswerText);
}

function answerWrong() {
	incorrect++;
	var incorrectAnswerText = "Incorrect! The correct answer is: " + questionArray[index].answer;
	$(".incorrectAnswer").html(incorrectAnswerText);
}

function noAnswer(){
	unanswer++;
	var noAnswerText = "Unanswer! The correct answer is: " + questionArray[index].answer;
	$(".unanswer").html(noAnswerText);
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});
});