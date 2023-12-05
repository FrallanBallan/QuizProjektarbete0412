//Array med objekt
const fizzyDrinks = [
  {
    name: "Coca-Cola",
    question: "Coca-Cola contains caffeine.",
    answer: ["true", "false"],
    rigthAnswer: ["true"],
    type: "trueFalse",
  },
  {
    name: "Pepsi",
    question: "Pepsi's original name was 'Brad's Drink'.",
    answer: ["true", "false"],
    rigthAnswer: ["false"],
    type: "trueFalse",
  },
  {
    name: "Sprite",
    question: "Sprite is a lemon-lime soda.",
    answer: ["true", "false"],
    rigthAnswer: ["true"],
    type: "trueFalse",
  },
  {
    name: "Fanta",
    question: "Fanta comes in flavors like orange and grape.",
    answer: ["true", "false"],
    rigthAnswer: ["true"],
    type: "trueFalse",
  },
  {
    name: "Mountain Dew",
    question: "Mountain Dew is a type of energy drink.",
    answer: ["true", "false"],
    rigthAnswer: ["false"],
    type: "trueFalse",
  },
  {
    name: "Dr. Pepper",
    question: "Dr. Pepper contains",
    answer: ["prune juice", "orange juice", "cherry juice", "cranberry juice"],
    rigthAnswer: ["cherry juice"],
    type: "radio",
  },
  {
    name: "Root Beer",
    question: "Root Beer is a type of ginger ale, name cities in Sweden.",
    answer: ["Stockholm", "Oslo", "Tokyo", "Stormwind"],
    rigthAnswer: ["Stockholm"],
    type: "radio",
  },
  {
    name: "Ginger Ale",
    question:
      "Ginger Ale is known for its calming effect on the stomach, what else is good for mr stomach.",
    answer: ["Coca cola", "Mushrooms", "Banana", "Kanjang"],
    rigthAnswer: ["Kanjang"],
    type: "radio",
  },
  {
    name: "Club Soda",
    question: "Club Soda is a flavored soda, which one is a club?.",
    answer: ["Studio 64", "Nivå 22", "Café Opera", "Midsommarkransen"],
    rigthAnswer: ["Studio 64"],
    type: "radio",
  },
  {
    name: "Tonic Water",
    question:
      "Tonic Water is often used as a mixer in cocktails and is drinkable as it is. whats in a gin and tonic?",
    answer: ["Tonic", "Gin", "Grapejuice", "Pasta"],
    rigthAnswer: ["Tonic", "Gin"],
    type: "checkbox",
  },
  {
    name: "Sparkling Water",
    question:
      "Sparkling Water is carbonated and is good for your teeth. what are the most common dentist names?",
    answer: ["Gordon", "Brandon", "Jordan", "Mank the tank"],
    rigthAnswer: ["Mank the tank", "Jordan"],
    type: "checkbox",
  },
  {
    name: "Seltzer",
    question:
      "Seltzer is a type of cola and smells like autumn. which ones here are jazz muscians",
    answer: ["Miles", "Mingus", "Mama Clara", "Mimirion"],
    rigthAnswer: ["Miles", "Mingus"],
    type: "checkbox",
  },
];
console.log(fizzyDrinks[3]);

//Variablar

let quizCards = document.querySelector(".cardWrap");

//Question Counter
let results = 0;

//Knappar

document.querySelector("#startQuizBtn").addEventListener("click", () => {
  if (fizzyDrinks.length > 0) {
    let randomQuestion = getRandomQuestion();
    constructQuizCard(randomQuestion);
    if (randomQuestion.type === "trueFalse") {
      getTrueFalse(randomQuestion);
    } else if (randomQuestion.type === "radio") {
      getRadio(randomQuestion);
    } else {
      getCheck(randomQuestion);
    }
  } else {
    quizCards.innerHTML = "";
    let finishTest = document.createElement("h3");
    finishTest.innerText =
      "Fizzy lizzy likes you quizy lets get down to the rizzultiez which iz";
  }
  console.log(results);
});

//Funktioner

let constructQuizCard = (questions) => {
  let quizDiv = document.createElement("div");
  quizDiv.classList.add("quizCard");
  quizDiv.innerText = `
    Name: ${questions.name}
    Question: ${questions.question}
    `;
  quizCards.innerHTML = "";
  quizCards.append(quizDiv);
};

let getRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * fizzyDrinks.length);
  return fizzyDrinks[randomIndex];
};

function getTrueFalse(question) {
  console.log(question);
  question.answer.forEach((answer) => {
    console.log(answer);
    let trueFalseBtn = document.createElement("button");
    trueFalseBtn.innerHTML = answer;
    quizCards.appendChild(trueFalseBtn);
    //Kallar på funktion
    trueFalseBtn.addEventListener("click", (e) =>
      checkAnswer(e, question, answer)
    );
  });
}

function getRadio(question) {
  question.answer.forEach((answer) => {
    let radioBtn = document.createElement("input");
    let radioLabel = document.createElement("label");
    radioBtn.type = "radio";
    radioBtn.name = "Funkdoobiest";
    radioBtn.value = answer;

    radioLabel.appendChild(radioBtn);
    radioLabel.appendChild(document.createTextNode(answer));
    quizCards.appendChild(radioLabel);
  });
}

function getCheck(question) {
  question.answer.forEach((answer) => {
    let checkBoxes = document.createElement("input");
    let checkBoxLabel = document.createElement("label");
    checkBoxes.type = "checkbox";
    checkBoxes.name = "DankMcDough";
    checkBoxes.value = answer;

    checkBoxLabel.appendChild(checkBoxes);
    checkBoxLabel.appendChild(document.createTextNode(answer));
    quizCards.appendChild(checkBoxLabel);
  });
}

function removeQuestion(question) {
  fizzyDrinks = fizzyDrinks.filter((item) => item !== question);
}

function checkAnswer(e, question, selectedAnswer) {
  console.log(e, question.rigthAnswer, selectedAnswer);
  if (question.rigthAnswer.includes(selectedAnswer)) {
    results++;
    console.log("Current points" + results);
  }

  console.log(results);
}

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
