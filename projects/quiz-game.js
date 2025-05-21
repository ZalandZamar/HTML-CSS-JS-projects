const container = document.querySelector(".js-container");
const quizBtnContainer = document.querySelector
  (".js-start-quiz-container");
const scoreContainer = document.querySelector(".js-final-score-container");
const scoreElement = document.querySelector(".js-score");
const restartBtn = document.querySelector(".js-restart-button");
let score = 0;

  const questions = [
    {
      question: "What does HTML stand for?",
      correctAnswer: "Hypertext markup language",
      answer1: "Hypertensive money loan",
      answer2: "HyperText manual log",
      answer3: "Hypertech math link"
    }, {
      question: "What does XML stand for?", 
      correctAnswer: "eXetensible markup language",
      answer1: "eXtended markup language",
      answer2: "eXtension Math link",
      answer3: "Expensive money loan"
    }, {
      question: "What does URL stand for?",
      correctAnswer: "Uniform source locator",
      answer1: "Universal source locator", 
      answer2: "University resource link",
      answer3: "Universal resource language"
    }
  ];

const quizContainer =  `
     <div class="js-quiz-container quiz-container
      hide-quiz-container">
    <div class="header">
      <h1>Quiz App</h1>
      <p>Time left <span class="js-time">10</span></p>
    </div>

    <div class="quiz-questions">
      <h1 class="question">Questions</h1>

      <p class="answer-1 answers answer">1</p>
      <p class="answer-2 answers answer">2</p>
      <p class="answer-3 answers answer">3</p>
      <p class="answer-4 answers answer">4</p>
    </div>

    <div class="footer">
      <p class="question-count">6 of 9 Question</p>
      <button class="js-next-button">Next</button>
    </div>

  </div>
  `;

document.body.insertAdjacentHTML("beforeend", quizContainer);
const insertedQuizContainer = document.querySelector(".js-quiz-container");
const nextBtn = document.querySelector(".js-next-button");
const question = document.querySelector(".question");
const answer1 = document.querySelector(".answer-1");
const answer2 = document.querySelector(".answer-2");
const answer3 = document.querySelector(".answer-3");
const answer4 = document.querySelector(".answer-4");
const questionCount = document.querySelector(".question-count");
const answersEvent = document.querySelectorAll(".answers");
const timeContainer = document.querySelector(".js-time");

let index = 1;
let interval;
let time = 10;

const quizStartBtn = document.querySelector(".js-start-quiz-button");
const exitQuizBtn = document.querySelector(".js-exit-quiz-button");
const continueQuizBtn = document.querySelector(".js-continue-button");

quizStartBtn.addEventListener("click", () => {
  container.classList.remove("container-hide");
  quizBtnContainer.classList.add("hide-quiz-container");
});

exitQuizBtn.addEventListener("click", () => {
  container.classList.add("container-hide");
  quizBtnContainer.classList.remove("hide-quiz-container");
});

continueQuizBtn.addEventListener("click", () => {
  container.classList.add("container-hide");
  insertedQuizContainer.classList.remove("hide-quiz-container");

  question.innerHTML = questions[0].question;
  answer1.innerHTML = questions[0].correctAnswer;
  answer2.innerHTML = questions[0].answer1;
  answer3.innerHTML = questions[0].answer2;
  answer4.innerHTML = questions[0].answer3;
  questionCount.innerHTML = index + " of 3 Questions";

  setInterval(() => {
    time--;
    timeContainer.innerHTML = time;
  }, 1000);
  
  gameOn();
});

nextBtn.addEventListener("click", () => {
  if(index > questions.length - 1) {
    return;
  }

  const currentQuestion = questions[index];

  question.innerHTML = currentQuestion.question;
  answer1.innerHTML = currentQuestion.correctAnswer;
  answer2.innerHTML = currentQuestion.answer1;
  answer3.innerHTML = currentQuestion.answer2;
  answer4.innerHTML = currentQuestion.answer3;
  questionCount.innerHTML = index + 1 + " of 3 Questions";

 index++;
});

let hasClicked = false;

answersEvent.forEach(answer => {
  answer.addEventListener("click", (event) => {
    if(hasClicked) return;
    hasClicked = true;

    const selectedAnswer = event.target;
    
    if (questions[index - 1].correctAnswer === selectedAnswer.innerHTML) {
      selectedAnswer.classList.add("correct-answer");
      score++;
    } else {
      selectedAnswer.classList.add("wrong-answer");
      
      answersEvent.forEach(ans => {
        if(ans.innerHTML === questions[index - 1].correctAnswer) {
          ans.classList.add("correct-answer");
        }
       });
    }
  });

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList" || mutation.type === "characterData") {
        answer.classList.remove("correct-answer");
        answer.classList.remove("wrong-answer");
        hasClicked = false;
        time = 10;
      }
    }
  });

  observer.observe(answer, {
    childList: true,
    characterData: true,
    subtree: true
  });
});

let isanswered = false;

function gameOn () {
   interval = setInterval(() => {
    if(index >= questions.length) {
      clearInterval(interval);
      insertedQuizContainer.classList.add("hide-quiz-container");
      scoreContainer.classList.remove("final-score-container-hide");
      scoreElement.innerHTML = `You got ${score} correct 
        out of ${questions.length}`;
      index = 1;
      return;
    }

  const currentQuestion = questions[index];

  question.innerHTML = currentQuestion.question;
  answer1.innerHTML = currentQuestion.correctAnswer;
  answer2.innerHTML = currentQuestion.answer1;
  answer3.innerHTML = currentQuestion.answer2;
  answer4.innerHTML = currentQuestion.answer3;
  questionCount.innerHTML = index + 1 + " of 3 Questions";

 index++;
  }, 10000);
}

restartBtn.addEventListener("click", () => {
  quizBtnContainer.classList.remove("hide-quiz-container");
  scoreContainer.classList.add("final-score-container-hide");
  score = 0;
});

