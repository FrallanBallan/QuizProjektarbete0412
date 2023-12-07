//Array med objekt
const fizzyDrinks = [
  {
    name: "Coca-Cola",
    question: "Coca-Cola contains caffeine.",
    answer: ["true", "false"],
    rightAnswer: ["true"],
    type: "trueFalse",
  },
  {
    name: "Pepsi",
    question: "Pepsi's original name was 'Brad's Drink'.",
    answer: ["true", "false"],
    rightAnswer: ["false"],
    type: "trueFalse",
  },
  {
    name: "Sprite",
    question: "Sprite is a lemon-lime soda.",
    answer: ["true", "false"],
    rightAnswer: ["true"],
    type: "trueFalse",
  },
  {
    name: "Fanta",
    question: "Fanta comes in flavors like orange and grape.",
    answer: ["true", "false"],
    rightAnswer: ["true"],
    type: "trueFalse",
  },
  {
    name: "Mountain Dew",
    question: "Mountain Dew is a type of energy drink.",
    answer: ["true", "false"],
    rightAnswer: ["false"],
    type: "trueFalse",
  },
  {
    name: "Dr. Pepper",
    question: "Dr. Pepper contains",
    answer: ["prune juice", "orange juice", "cherry juice", "cranberry juice"],
    rightAnswer: ["cherry juice"],
    type: "radio",
  },
  {
    name: "Root Beer",
    question: "Root Beer is a type of ginger ale, name cities in Sweden.",
    answer: ["Stockholm", "Oslo", "Tokyo", "Stormwind"],
    rightAnswer: ["Stockholm"],
    type: "radio",
  },
  {
    name: "Ginger Ale",
    question:
      "Ginger Ale is known for its calming effect on the stomach, what else is good for mr stomach.",
    answer: ["Coca cola", "Mushrooms", "Banana", "Kanjang"],
    rightAnswer: ["Kanjang"],
    type: "radio",
  },
  {
    name: "Club Soda",
    question: "Club Soda is a flavored soda, which one is a club?.",
    answer: ["Studio 64", "Nivå 22", "Café Opera", "Midsommarkransen"],
    rightAnswer: ["Studio 64"],
    type: "radio",
  },
  {
    name: "Tonic Water",
    question:
      "Tonic Water is often used as a mixer in cocktails and is drinkable as it is. whats in a gin and tonic?",
    answer: ["Tonic", "Gin", "Grapejuice", "Pasta"],
    rightAnswer: ["Tonic", "Gin"],
    type: "checkbox",
  },
  {
    name: "Sparkling Water",
    question:
      "Sparkling Water is carbonated and is good for your teeth. what are the most common dentist names?",
    answer: ["Gordon", "Brandon", "Jordan", "Mank the tank"],
    rightAnswer: ["Mank the tank", "Jordan"],
    type: "checkbox",
  },
  {
    name: "Seltzer",
    question:
      "Seltzer is a type of cola and smells like autumn. which ones here are jazz muscians",
    answer: ["Miles", "Mingus", "Mama Clara", "Mimirion"],
    rightAnswer: ["Miles", "Mingus"],
    type: "checkbox",
  },
];
console.log(fizzyDrinks[3]);

//Variablar

let quizCards = document.querySelector(".cardWrap");
let newDiv = document.createElement("div");
//Question Counter
let results = 0;
let questionCounter = 0;

let allQuestions = [];

//Start knapp
let startButton = document.querySelector("#startQuizBtn");

//Next knapp
let nextButton = document.querySelector("#nextButton");

//Darkmode knapp och funkish
let darkMode = document.querySelector("#darkmode");
let body = document.body;

darkMode.addEventListener("click", () => {
  body.classList.toggle("darkMode");
  document.querySelector("#lighty").classList.toggle("lightMouse");
});

//Next question funkish
nextButton.addEventListener("click", getNextQuestion);
nextButton.style.display = "none";

// Starta quiz
startButton.addEventListener("click", () => {
  questionCounter = 0;
  results = 0;
  allQuestions = [];
  getNextQuestion();
  quizCards.style.backgroundColor = "";
  document.querySelector("#allQuestionsContainer").innerHTML = "";
});

// Funktion som visar frågan baserad på if satser och skapar en div
function displayQuestion(question) {
  let quizDiv = document.createElement("div");
  quizDiv.classList.add("quizCard");
  quizDiv.innerHTML = `
    <h3>${question.name}</h3>
    <p>${question.question}</p>
  `;
  nextButton.style.display = "none";
  startButton.style.display = "none";

  // if sats för att hitta om frågan har en viss typ
  if (question.type === "trueFalse") {
    newDiv.innerHTML = "";
    question.answer.forEach((answer) => {
      let button = document.createElement("button");
      button.innerText = answer;
      button.addEventListener("click", () => checkAnswer(question, answer));
      newDiv.appendChild(button);
      console.log(newDiv);
    });
    quizDiv.appendChild(newDiv);
  } else {
    newDiv.innerHTML = "";
    question.answer.forEach((answer) => {
      let input = document.createElement("input");
      input.type = question.type;
      input.name = question.name;
      input.value = answer;
      input.addEventListener("click", () => checkAnswer(question, answer));

      // label
      let label = document.createElement("label");

      label.appendChild(input);
      label.appendChild(document.createTextNode(answer));
      newDiv.appendChild(label);
      console.log(newDiv);
    });
    quizDiv.appendChild(newDiv);
  }

  //Funktion skapar knapp och rensar dom och appendar ny quizDiv

  quizCards.innerHTML = "";
  quizCards.appendChild(quizDiv);
}

function checkAnswer(question, selectedAnswer) {
  if (question.rightAnswer.includes(selectedAnswer)) {
    results++;
  }
  questionCounter++;
  if (!newDiv.firstChild.innerHTML.includes("checkbox")) {
    Array.from(newDiv.children).forEach((child) => {
      child.classList.add("disabled");
    });
    console.log(results);
  }
  let object = {};
  object["name"] = question.name;
  object["selectedAnswer"] = selectedAnswer;
  object["rightAnswer"] = question.rightAnswer;
  allQuestions.push(object);
  nextButton.style.display = "block";
}

function displayResult() {
  let percentAnswers = (results / fizzyDrinks.length) * 100;
  quizCards.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>You scored ${results} out of ${fizzyDrinks.length}.</p>
  `;
  startButton.style.display = "block";
  startButton.innerHTML = "Fizz Again";
  nextButton.style.display = "none";
  if (percentAnswers <= 50) {
    quizCards.style.backgroundColor = "red";
  } else if (percentAnswers <= 75) {
    quizCards.style.backgroundColor = "orange";
  } else if (percentAnswers >= 100) {
    quizCards.style.backgroundColor = "green";
  }
  displayAllQuestions();
}
//funktion för next question
function getNextQuestion() {
  // questionCounter++;
  if (questionCounter < fizzyDrinks.length) {
    displayQuestion(fizzyDrinks[questionCounter]);
  } else {
    displayResult();
  }
}

//Visa alla quiz cards
function displayAllQuestions() {
  let questionsContainer = document.querySelector("#allQuestionsContainer");
  questionsContainer.innerHTML = "";

  //Funktion på min globala array
  allQuestions.forEach((questionObj) => {
    let questionElement = document.createElement("div");

    let nameElement = document.createElement("span");
    nameElement.textContent = `Question: ${questionObj.name}`;
    questionElement.appendChild(nameElement);

    let userAnswerDisplay = document.createElement("span");
    userAnswerDisplay.textContent = `Your answer: ${questionObj.selectedAnswer}`;
    questionElement.appendChild(userAnswerDisplay);

    questionsContainer.appendChild(questionElement);

    if (questionObj.rightAnswer.includes(questionObj.selectedAnswer)) {
      questionElement.style.background = "green";
    } else {
      questionElement.style.background = "red";
    }
  });

  // if (question.type === "trueFalse") {
  //   userAnswerDisplay.textContent = ` - Your answer: ${question.selectedAnswer}`;
  // } else if (question.type === "radio") {
  //   userAnswerDisplay.textContent = ` - Your answer: ${question.selectedAnswer}`;
  // } else if (question.type === "checkbox") {
  //   userAnswerDisplay.textContent = ` - Your answer: ${question.selectedAnswer}`;
  // }

  // Kom ihåg
  // questionElement.appendChild(userAnswerDisplay);
  // questionsContainer.appendChild(questionElement);
  // console.log(allQuestions);
}

// // FÖRSTA TRY
// document
//   .querySelector("#startQuizBtn")
//   .addEventListener("click", getNextQuestion);

// function getNextQuestion() {
//   // let randomQuestion = getRandomQuestion();
//   fizzyDrinks.forEach((randomQuestion) => {
//     constructQuizCard(randomQuestion);
//     if (randomQuestion.type === "trueFalse") {
//       getTrueFalse(randomQuestion);
//     } else if (randomQuestion.type === "radio") {
//       getRadio(randomQuestion);
//     } else {
//       getCheck(randomQuestion);
//     }
//   });
// }

// //Funktioner

// let constructQuizCard = (questions) => {
//   let quizDiv = document.createElement("div");
//   quizDiv.classList.add("quizCard");
//   quizDiv.innerText = `
//     Name: ${questions.name}
//     Question: ${questions.question}
//     `;
//   quizCards.innerHTML = "";
//   quizCards.append(quizDiv);
// };

// function getTrueFalse(question) {
//   console.log(question);
//   question.answer.forEach((answer) => {
//     console.log(answer);
//     let trueFalseBtn = document.createElement("button");
//     trueFalseBtn.innerHTML = answer;
//     quizCards.appendChild(trueFalseBtn);
//     //Kallar på funktion
//     trueFalseBtn.addEventListener("click", (e) =>
//       checkAnswer(e, question, answer)
//     );
//   });
// }

// function getRadio(question) {
//   question.answer.forEach((answer) => {
//     let radioBtn = document.createElement("input");
//     let radioLabel = document.createElement("label");
//     radioBtn.type = "radio";
//     radioBtn.name = "Funkdoobiest";
//     radioBtn.value = answer;

//     radioLabel.appendChild(radioBtn);
//     radioLabel.appendChild(document.createTextNode(answer));
//     quizCards.appendChild(radioLabel);

//     radioBtn.addEventListener("click", (e) => checkAnswer(e, question, answer));
//   });
// }

// function getCheck(question) {
//   question.answer.forEach((answer) => {
//     let checkBoxes = document.createElement("input");
//     let checkBoxLabel = document.createElement("label");
//     checkBoxes.type = "checkbox";
//     checkBoxes.name = "DankMcDough";
//     checkBoxes.value = answer;

//     checkBoxLabel.appendChild(checkBoxes);
//     checkBoxLabel.appendChild(document.createTextNode(answer));
//     quizCards.appendChild(checkBoxLabel);

//     checkBoxes.addEventListener("click", (e) =>
//       checkAnswer(e, question, answer)
//     );
//   });
// }

// function removeQuestion(question) {
//   fizzyDrinks = fizzyDrinks.filter((item) => item !== question);
// }

// function checkAnswer(e, question, selectedAnswer) {
//   console.log(e, question.rigthAnswer, selectedAnswer);
//   if (question.rigthAnswer.includes(selectedAnswer)) {
//     results++;
//     console.log("Current points" + results);
//   }
//   getNextQuestion();
//   console.log(results);
//   console.log(questionCounter);
// }
// //FÖRSTA TRY

//Exempel
// {
//     name: "Seltzer",
//     question: "Seltzer is a type of cola.",
//     answer: false,
// },

// function pointsCounter(playerAnswers, correctAnswer) {
//   let points = 0;
//   playerAnswers.forEach((playerAnswers, index) => {
//     if (playerAnswers === correctAnswer[index]) {
//       points++;
//     }
//   });
//   return points;
// }

// function checkBoxResults(question) {
//   let correctAnswer = [];
//   question.answer.forEach((answer) => {
//     correctAnswer.push(answer.correct);
//   });

//   let playerAnswers = [];

//   let checkboxes = document.querySelectorAll("input[name='DankMcDough']");
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       playerAnswers.push(checkbox.value === "true");
//     }
//   });

//   let points = pointsCounter(playerAnswers, correctAnswer);
//   results += points;
//   console.log(results);
// }

//Filtering

//Rendering

//Poängställning

// Museffekt
let mousePos = document.documentElement;
mousePos.addEventListener("mousemove", (e) => {
  mousePos.style.setProperty("--x", e.clientX + "px");
  mousePos.style.setProperty("--y", e.clientY + "px");
});

//Shuffle funktion
// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }

// let getRandomQuestion = () => {
//   if (questionCounter < 12) {
//     const randomIndex = Math.floor(Math.random() * fizzyDrinks.length);
//     questionCounter++;
//     return fizzyDrinks[randomIndex];

//   } else {
//     alert("Quiz is finished");
//     quizCards.innerHTML = "";
//     let finishTest = document.createElement("h3");
//     finishTest.innerText =
//       "Fizzy lizzy likes you quizy lets get down to the rizzultiez which iz";
//   }
// };
