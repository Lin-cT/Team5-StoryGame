// const startContainer = document.getElementById("start-container");
// const startButton = document.getElementById("start-button");
// startButton.addEventListener("click", startGame);

// const nextContainer = document.getElementById("next-container");
// const nextButton = document.getElementById("next-button");

// const submitContainer = document.getElementById("submit-container");
// const submitButton = document.getElementById("submit-button");

// const promptContainer = document.getElementById("prompt-container");
// const prompt = document.getElementById("prompt");

// const feedbackContainer = document.getElementById("feedback-container")
// const feedback = document.getElementById('feedback')

// const bubbleWrapper = document.getElementById('bubble-wrapper')
// const bubbleRowLeft = document.querySelector('.row-left');
// const bubbleRowRight = document.querySelector('.row-right')

// const problem = document.getElementById('problem')
// const userAnswerInput = document.getElementById('user-answer-input')

// const sajaBoysImg = document.getElementById("saja-boys-img");

// var question = 0
// var partNum = 0

// questions = [
//   "It is a brand new day, and Jinu has just woken up! Jinu would like to start off the day with doing his skincare routine to keep his flawless skin perfect. Help Jinu with his skincare! Solve the problems to complete Jinu's skincare routine!",
//   "After getting ready, Jinu meets up with the rest of the Saja Boys for breakfast. Today, it’s Mystery Saja’s turn to cook breakfast for everybody. Help Mystery Saja make scrambled eggs!",
//   "With their tummies full, the Saja Boys head over to the practice room to practice their choreography. The choreography includes an ab reveal by Abby Saja. Help Abby practice his ab reveal for the performance!"
// ]
// question1Parts = [
//   "Hurray! Jinu finished using cleanser! Continue answering problems to complete Jinu's skincare routine.",
//   "Yay! Jinu finished exfloiating his skin! Continue answering problems to complete Jinu's skincare routine.",
//   // "Halfway done! Jinu used toner! Continue answering problems to complete Jinu's skincare routine.",
//   // "Almost done! Jinu used expensive acne treatment! Continue answering problems to continue Jinu's skincare routine.",
//   // "Finished! Jinu used moisturizer and finished his skincare routine. He's now ready for the day!"
// ]
// question2Parts = [
//   "Mystery Saja has heated the pan up and added oil. Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
//   "Mystery Saja cracked the egg! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
//   // "Mystery Saja added salt onto the eggs! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
//   // "The egg is almost done! Mystery Saja has flipped the egg! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
//   // "Hurray! The egg is done. Mystery Saja plated the scrambled eggs so everyone can eat!"
// ]
// question3Parts = [
//   "save me",
//   "cooked"
// ]

// let num1, den1, num2, den2;

// function questionNumber() {
//   bubbleWrapper.style.display = "none";
//   feedbackContainer.style.display = "none";
//   promptContainer.style.display = "flex";
//   submitContainer.style.display = "none";
//   nextContainer.style.display = "flex";
//   sajaBoysImg.style.display = "block";
//   prompt.textContent = questions[question]
//   if (question != 0){
//     nextButton.removeEventListener("click", questionNumber)
//   }
//   nextButton.addEventListener("click", createProblem);
// }

// function createProblem() {
//   num1 = Math.floor(Math.random() * 10) + 1;
//   den1 = Math.floor(Math.random() * 12) + 1;
//   num2 = Math.floor(Math.random() * 10) + 1;
//   den2 = Math.floor(Math.random() * 12) + 1;

//   promptContainer.style.display = 'none';
//   sajaBoysImg.style.display = 'none';
//   feedbackContainer.style.display = 'none';
//   nextContainer.style.display = 'none';
//   bubbleWrapper.style.display = 'flex';
//   submitContainer.style.display = 'flex';
//   userAnswerInput.textContent = "";
//   problem.innerHTML = "Problem: " + num1 + "/" + den1 + " * " + num2 + "/" + den2;
// }
// submitButton.addEventListener('click', function(){
//     checkAnswer(num1, den1, num2, den2);
//   }, false);

// function startGame() {
//   console.log("Saja Boys!");
//   startContainer.style.display = "none";
//   startButton.style.display = "none";
//   questionNumber();
// }

// function checkAnswer(num1, den1, num2, den2){
//   var userAnswer = userAnswerInput.value
//   console.log("User Answer:" + userAnswer)
//   var correctAnswer = num1 * num2 + "/" + den1 * den2
//   var simplifiedAnswer = simplifyAnswer(correctAnswer)
//   console.log("Correct Answer: " + simplifiedAnswer)
//   if (userAnswer == simplifiedAnswer) {
//     console.log("Correct!")
//     getFeedback()
//   } else {
//     console.log("Incorrect")
//   }
// }

// function simplifyAnswer(fraction){
//   var num = fraction.split("/")[0]
//   var den = fraction.split("/")[1]
//   var gcd = getGcd(num, den)
//   var answer = num / gcd + "/" + den/gcd
//   return answer
// }
// function getGcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }
// function getFeedback(){
//   bubbleWrapper.style.display = "none";
//   submitContainer.style.display = "none";
//   feedbackContainer.style.display = "flex";
//   sajaBoysImg.style.display = "flex";
//   nextContainer.style.display = "flex";
//   console.log("Question: " + question + "\n Part: " + partNum)

//   if (question == 0) {
//     feedback.innerHTML = question1Parts[partNum];
//     partNum++;

//     if (partNum == question1Parts.length) {
//       question++;
//       partNum = 0;
//       nextButton.removeEventListener("click", createProblem);
//       nextButton.addEventListener("click", questionNumber)
//     }
//   }

//   if (question === 1) {
//     feedback.innerHTML = question2Parts[partNum];
//     partNum++;

//     if (partNum === question2Parts.length) {
//       question++;
//       partNum = 0;
//       nextButton.removeEventListener("click", createProblem);
//       nextButton.addEventListener("click", questionNumber)
//     }
//   }

//   if (question === 2) {
//     // add your question3Parts array later
//     feedback.innerHTML = question3Parts[partNum];
//   }
// }
const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

const nextContainer = document.getElementById("next-container");
const nextButton = document.getElementById("next-button");

const submitContainer = document.getElementById("submit-container");
const submitButton = document.getElementById("submit-button");

const promptContainer = document.getElementById("prompt-container");
const prompt = document.getElementById("prompt");

const feedbackContainer = document.getElementById("feedback-container")
const feedback = document.getElementById('feedback')

const bubbleWrapper = document.getElementById('bubble-wrapper')
const bubbleRowLeft = document.querySelector('.row-left');
const bubbleRowRight = document.querySelector('.row-right')

const problem = document.getElementById('problem')
const userAnswerInput = document.getElementById('user-answer-input')

const sajaBoysImg = document.getElementById("saja-boys-img");

let question = 0;
let partNum = 0;

let num1, den1, num2, den2;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", handleNext);
submitButton.addEventListener("click", handleSubmit);

questions = [
  "It is a brand new day, and Jinu has just woken up! Jinu would like to start off the day with doing his skincare routine to keep his flawless skin perfect. Help Jinu with his skincare! Solve the problems to complete Jinu's skincare routine!",
  "After getting ready, Jinu meets up with the rest of the Saja Boys for breakfast. Today, it’s Mystery Saja’s turn to cook breakfast for everybody. Help Mystery Saja make scrambled eggs!",
  "With their tummies full, the Saja Boys head over to the practice room to practice their choreography. The choreography includes an ab reveal by Abby Saja. Help Abby practice his ab reveal for the performance!",
];
question1Parts = [
  "Hurray! Jinu finished using cleanser! Continue answering problems to complete Jinu's skincare routine.",
  "Yay! Jinu finished exfloiating his skin! Continue answering problems to complete Jinu's skincare routine.",
  // "Halfway done! Jinu used toner! Continue answering problems to complete Jinu's skincare routine.",
  // "Almost done! Jinu used expensive acne treatment! Continue answering problems to continue Jinu's skincare routine.",
  // "Finished! Jinu used moisturizer and finished his skincare routine. He's now ready for the day!"
];
question2Parts = [
  "Mystery Saja has heated the pan up and added oil. Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
  "Mystery Saja cracked the egg! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
  // "Mystery Saja added salt onto the eggs! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
  // "The egg is almost done! Mystery Saja has flipped the egg! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
  // "Hurray! The egg is done. Mystery Saja plated the scrambled eggs so everyone can eat!"
];
question3Parts = ["save me", "cooked"];

function startGame() {
  console.log("Saja Boys!");
  startContainer.style.display = "none";
  startButton.style.display = "none";

  showQuestionIntro();
}

function showQuestionIntro() {
  bubbleWrapper.style.display = "none";
  feedbackContainer.style.display = "none";
  submitContainer.style.display = "none";

  promptContainer.style.display = "flex";
  nextContainer.style.display = "flex";
  sajaBoysImg.style.display = "block";

  prompt.textContent = questions[question];
}

function handleNext() {
  if (promptContainer.style.display === "flex") {
    createProblem();
    return;
  }

  if (feedbackContainer.style.display === "flex") {
    continueOrAdvanceQuestion();
    return;
  }
}

function createProblem() {
  num1 = Math.floor(Math.random() * 10) + 1;
  den1 = Math.floor(Math.random() * 12) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  den2 = Math.floor(Math.random() * 12) + 1;

  promptContainer.style.display = "none";
  feedbackContainer.style.display = "none";
  sajaBoysImg.style.display = "none";
  nextContainer.style.display = "none";

  bubbleWrapper.style.display = "flex";
  submitContainer.style.display = "flex";

  userAnswerInput.value = "";
  problem.textContent = `Problem: ${num1}/${den1} × ${num2}/${den2}`;
}

function handleSubmit() {
  checkAnswer(num1, den1, num2, den2);
}

function checkAnswer(num1, den1, num2, den2) {
  const userAnswer = userAnswerInput.value;
  const correct = simplifyAnswer(num1 * num2 + "/" + den1 * den2);

  console.log("Correct simplified:", correct);

  if (userAnswer === correct) {
    showFeedback();
  } else {
    console.log("Incorrect");
  }
}
function showFeedback() {
  bubbleWrapper.style.display = "none";
  submitContainer.style.display = "none";

  feedbackContainer.style.display = "flex";
  nextContainer.style.display = "flex";
  sajaBoysImg.style.display = "flex";

  if (question === 0) feedback.textContent = question1Parts[partNum];
  else if (question === 1) feedback.textContent = question2Parts[partNum];
  else if (question === 2) feedback.textContent = question3Parts[partNum];
}
function continueOrAdvanceQuestion() {
  partNum++;

  const partArrays = [question1Parts, question2Parts, question3Parts];

  if (partNum >= partArrays[question].length) {
    question++;
    partNum = 0;

    if (question >= 3) {
      console.log("Go to Alyssa's section!")
    }

    showQuestionIntro();
    return;
  }

  createProblem();
}
function simplifyAnswer(frac) {
  let [num, den] = frac.split("/").map(Number);
  let g = getGcd(num, den);
  return num / g + "/" + den / g;
}

function getGcd(a, b) {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}
