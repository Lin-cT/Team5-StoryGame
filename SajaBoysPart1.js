const nextContainer = document.getElementById("next-container");
const nextButton = document.getElementById("next-button");
const loginButton = document.getElementById("login-button");
loginButton.addEventListener('click', function(){
  window.location.href = "login.html"
});

const submitContainer = document.getElementById("submit-container");
const submitButton = document.getElementById("submit-button");

const promptContainer = document.getElementById("prompt-container");
const prompt = document.getElementById("prompt");

const feedbackContainer = document.getElementById("feedback-container");
const feedback = document.getElementById("feedback");

const bubbleWrapper = document.getElementById("bubble-wrapper");
const bubbleRowLeft = document.querySelector(".row-left");
const bubbleRowRight = document.querySelector(".row-right");

const problem = document.getElementById("problem");
const userAnswerInput = document.getElementById("user-answer-input");

const checkContainer = document.getElementById("check-container");
const checkImage = document.getElementById("check-image");
const errorContainer = document.getElementById("error-container");
const errorImage = document.getElementById("error-image");
const ribbon = document.getElementById("ribbon");
const ribbonSpan = document.getElementById("ribbon-span");

const sajaBoysImg = document.getElementById("saja-boys-img");

let question = 0;
let partNum = 0;

let num1, den1, num2, den2;

window.onload = startGame;
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
  "Halfway done! Jinu used toner! Continue answering problems to complete Jinu's skincare routine.",
  "Almost done! Jinu used an expensive serum treatment! Continue answering problems to continue Jinu's skincare routine.",
  "Finished! Jinu used moisturizer and finished his skincare routine. He's now ready for the day!",
];
question2Parts = [
  "Mystery Saja has heated the pan up and added oil. Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
  "Mystery Saja cracked the egg! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
  "Mystery Saja added salt onto the eggs! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
  "The egg is almost done! Mystery Saja has flipped the egg! Continue answering problems to help Mystery Saja finish making scrambeled eggs!",
  "Hurray! The egg is done. Mystery Saja plated the scrambled eggs so everyone can eat!",
];
question3Parts = [
  "Abby has finished practicing his dance moves! Continue answering problems to help Abby perfect his dance and ab reveal.",
  "Abby nailed lifting his shirt to expose his abs. Conitnue answering problems to help Abby finish his ab reveal routine!",
  "Abby ripped off his shirt! He has now perfected the perfect ab reveal routine!",
];

questionImages = [
  "problem_images/question1.jpg",
  "problem_images/question2.jpg",
  "problem_images/question3.jpg",
];
question1Images = [
  "problem_images/question1_1.jpg",
  "problem_images/question1_2.jpg",
  "problem_images/question1_3.jpg",
  "problem_images/question1_4.jpg",
  "problem_images/question1_5.jpg",
];
question2Images = [
  "problem_images/question2_1.jpg",
  "problem_images/question2_2.jpg",
  "problem_images/question2_3.jpg",
  "problem_images/question2_4.jpg",
  "problem_images/question2_5.jpg",
];
question3Images = [
  "problem_images/question3_1.jpg",
  "problem_images/question3_2.jpg",
  "problem_images/question3_3.jpg",
];

function startGame() {
  console.log("Saja Boys!");
  showQuestionIntro();
}

function showQuestionIntro() {
  bubbleWrapper.style.display = "none";
  feedbackContainer.style.display = "none";
  submitContainer.style.display = "none";
  checkContainer.style.display = "none";
  checkImage.style.display = "none";

  promptContainer.style.display = "flex";
  nextContainer.style.display = "flex";
  sajaBoysImg.style.display = "block";

  prompt.textContent = questions[question];
  sajaBoysImg.src = questionImages[question];
}

function handleNext() {
  if (
    promptContainer.style.display === "flex" ||
    errorContainer.style.display === "block"
  ) {
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
  errorContainer.style.display = "none";
  errorImage.style.display = "none";
  ribbon.style.display = "none";
  ribbonSpan.style.display = "none";
  nextContainer.style.display = "none";
  checkContainer.style.display = "none";
  checkImage.style.display = "none";

  bubbleWrapper.style.display = "flex";
  submitContainer.style.display = "flex";

  userAnswerInput.value = "";
  problem.innerHTML = `Problem: ${num1}/${den1} &times ${num2}/${den2}`;
  problem.innerHTML =
    prettyFunction(num1, den1) + " &times " + prettyFunction(num2, den2);
}

function handleSubmit() {
  checkAnswer(num1, den1, num2, den2);
}

function checkAnswer(num1, den1, num2, den2) {
  const userAnswer = userAnswerInput.value;
  const correct = num1 * num2 + "/" + den1 * den2;
  const simplifiedCorrect = simplifyAnswer(num1 * num2 + "/" + den1 * den2);

  console.log("Correct:", correct);
  console.log("Correct simplified:", simplifiedCorrect);

  if (userAnswer === correct || userAnswer === simplifiedCorrect) {
    showFeedback();
  } else {
    showIncorrect();
  }
}
function showFeedback() {
  bubbleWrapper.style.display = "none";
  submitContainer.style.display = "none";
  checkContainer.style.display = "block";
  checkImage.style.display = "block";
  feedbackContainer.style.display = "flex";
  nextContainer.style.display = "flex";
  sajaBoysImg.style.display = "flex";

  if (question === 0) {
    feedback.textContent = question1Parts[partNum];
    sajaBoysImg.src = question1Images[partNum];
  } else if (question === 1) {
    feedback.textContent = question2Parts[partNum];
    sajaBoysImg.src = question2Images[partNum];
  } else if (question === 2) {
    feedback.textContent = question3Parts[partNum];
    sajaBoysImg.src = question3Images[partNum];
  }
}
function showIncorrect() {
  bubbleWrapper.style.display = "none";
  submitContainer.style.display = "none";

  errorContainer.style.display = "block";
  errorImage.style.display = "flex";
  ribbon.style.display = "block";
  ribbonSpan.style.display = "block";
  nextContainer.style.display = "flex";
}

function continueOrAdvanceQuestion() {
  partNum++;

  const partArrays = [question1Parts, question2Parts, question3Parts];

  if (partNum >= partArrays[question].length) {
    question++;
    partNum = 0;

    if (question >= 3) {
      window.location.href = "SajaBoys_Act_5_1.html";
      console.log("Go to Alyssa's section!");
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
function prettyFunction(num1, den1) {
  // return '<sup> ${num1} </sup>&frasl;<sub>den2</sub>';
  return `<sup>${num1} </sup>&frasl; <sub> ${den1} </sub>`;
}
