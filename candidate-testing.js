const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


let questions = ["Who was the first American woman in space? ",
                  "True or false: 5 kilometer == 5000 meters? ",
                  "(5 + 3)/2 * 10 = ? ",
                  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                  "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40",	"Trajectory","3" ];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  
  for (let i = 0; i < questions.length; i++) {
    // let userAnswer = input.question(questions[i]);
    // candidateAnswers.push(userAnswer);
     candidateAnswers[i] = input.question(`${i + 1}) ${questions[i]}`)
     console.log ( `Your Response:${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);
  }
}

function gradeQuiz(candidateAnswers) {
  

  let grade = 0;
  let numOfCorrect = 0;
  for( i=0; i<correctAnswers.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      // grade += 20;
       numOfCorrect++;
    } 
  } 
  grade = numOfCorrect/questions.length *100;
  
  console.log((`Overall Grade: ${grade}% (${numOfCorrect} of ${questions.length} responses correct)`))
  
    if (grade >= 80) {
    console.log( `Status: PASSED`);
  } else {
    console.log(`Stutus: FAILED`);
  }
  
  return grade;
}

function runProgram() {
  askForName();
   console.log(`\nCandidate Name: ${candidateName}\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};