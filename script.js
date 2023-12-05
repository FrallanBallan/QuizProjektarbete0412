//Array med objekt
const fizzyDrinks = [
  {
    name: "Coca-Cola",
    question: "Coca-Cola contains caffeine.",
    answer: [true, false],
    type: "trueFalse",
  },
  {
    name: "Pepsi",
    question: "Pepsi's original name was 'Brad's Drink'.",
    answer: [true, false],
    type: "trueFalse",
  },
  {
    name: "Sprite",
    question: "Sprite is a lemon-lime soda.",
    answer: [true, false],
    type: "trueFalse",
  },
  {
    name: "Fanta",
    question: "Fanta comes in flavors like orange and grape.",
    answer: [true, false],
    type: "trueFalse",
  },
  {
    name: "Mountain Dew",
    question: "Mountain Dew is a type of energy drink.",
    answer: [true, false],
    type: "trueFalse",
  },
  {
    name: "Dr. Pepper",
    question: "Dr. Pepper contains prune juice.",
    answer: [true, false],
    type: "radio",
  },
  {
    name: "Root Beer",
    question: "Root Beer is a type of ginger ale.",
    answer: [true, false],
    type: "radio",
  },
  {
    name: "Ginger Ale",
    question: "Ginger Ale is known for its calming effect on the stomach.",
    answer: [true, false],
    type: "radio",
  },
  {
    name: "Club Soda",
    question: "Club Soda is a flavored soda.",
    answer: [true, false],
    type: "radio",
  },
  {
    name: "Tonic Water",
    question:
      "Tonic Water is often used as a mixer in cocktails and is drinkable as it is.",
    answer: [true, false],
    type: "checkbox",
  },
  {
    name: "Sparkling Water",
    question: "Sparkling Water is carbonated and is good for your teeth.",
    answer: [true, false],
    type: "checkbox",
  },
  {
    name: "Seltzer",
    question: "Seltzer is a type of cola and smells like autumn.",
    answer: [false, false],
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
    let finishTest = document.createElement("h2");
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
    let trueFalseBtn = document.createElement("button");
    trueFalseBtn.innerHTML = answer;
    quizCards.appendChild(trueFalseBtn);
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

function pointsCounter(playerAnswers, correctAnswer) {
  let points = 0;
  playerAnswers.forEach((playerAnswers, index) => {
    if (playerAnswers === correctAnswer[index]) {
      points++;
    }
  });
  return points;
}

function checkBoxResults(question) {
  let playerAnswers = [];

  let checkboxes = document.querySelectorAll("input[name='DankMcDough']");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      playerAnswers.push(checkbox.value === "true");
    }
  });

  let correctAnswer = question.answer;

  let points = pointsCounter(playerAnswers, correctAnswer);
  results += points;
  console.log(results);
}

//Filtering

//Rendering

//Poängställning

//Exempel
// {
//     name: "Seltzer",
//     question: "Seltzer is a type of cola.",
//     answer: false,
// },

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
